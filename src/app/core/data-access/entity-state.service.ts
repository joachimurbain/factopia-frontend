import { computed, effect, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs';
import { CrudApiService } from './crud-api.service';
import { BaseEntity } from './base-entity.model';

export interface EntityState<T extends BaseEntity> {
  items: T[];
  itemMap: Record<number, T>;
}

export abstract class EntityStateService<T extends BaseEntity> {
  // ────────────────────────────────
  //  Dependencies
  // ────────────────────────────────
  private readonly _apiService: CrudApiService<T>;

  // ────────────────────────────────
  //  Core Reactive State
  // ────────────────────────────────
  protected readonly state = signal<EntityState<T>>({
    items: [],
    itemMap: {},
  });

  // ────────────────────────────────
  //  Triggers (write-only)
  // ────────────────────────────────
  private readonly _loadAll = signal(false);
  private readonly _loadOne = signal<number | null>(null);

  private readonly _createItem = signal<Omit<T, 'id'> | null>(null);
  private readonly _created = signal<T | null>(null);
  private readonly _updateItem = signal<Partial<T> | null>(null);
  private readonly _updated = signal<T | null>(null);
  private readonly _deleteItem = signal<number | null>(null);
  private readonly _deleted = signal<number | null>(null);

  // ────────────────────────────────
  //  Public Reactive Indicators
  // ────────────────────────────────
  public readonly isLoading = signal(false);
  public readonly error = signal<string | null>(null);

  // ────────────────────────────────
  //  Public Read Accessors
  // ────────────────────────────────
  public readonly items = computed(() => this.state().items);
  public readonly itemMap = computed(() => this.state().itemMap);
  public readonly itemById = (
    idSignal: Signal<number | string | null | undefined>
  ) =>
    computed(() => {
      const id = idSignal();
      if (id == null) return undefined;
      return this.itemMap()[+id];
    });

  public readonly created = this._created.asReadonly();
  public readonly updated = this._updated.asReadonly();
  public readonly deleted = this._deleted.asReadonly();

  // ────────────────────────────────
  //  Constructor & Effects
  // ────────────────────────────────
  constructor(
    protected httpClient: HttpClient,
    protected resourceEndPoint: string
  ) {
    this._apiService = new CrudApiService<T>(httpClient, resourceEndPoint);

    // Effect: Fetch all
    effect(() => {
      if (!this._loadAll()) return;

      this.isLoading.set(true);
      this.error.set(null);

      this._apiService
        .getAll()
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (items) => {
            const itemMap = Object.fromEntries(
              items.map((item) => [item.id, item])
            );
            this.state.set({ items, itemMap });
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Unknown error');
          },
        });

      this._loadAll.set(false); // reset trigger
    });

    // Effect: Load one item by ID
    effect(() => {
      const id = this._loadOne();
      if (id === null || this.state().itemMap[id]) {
        return;
      }

      this.isLoading.set(true);
      this.error.set(null);

      this._apiService
        .getById(id)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (item) => {
            this.state.update((state) => ({
              items: [...state.items.filter((i) => i.id !== item.id), item],
              itemMap: {
                ...state.itemMap,
                [item.id]: item,
              },
            }));
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Error loading item');
          },
        });

      this._loadOne.set(null); // reset
    });

    // Effect: Create
    effect(() => {
      const dto = this._createItem();
      if (!dto) return;

      this.isLoading.set(true);
      this.error.set(null);

      this._apiService
        .create(dto)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (createdItem) => {
            this.state.update((state) => ({
              items: [...state.items, createdItem],
              itemMap: {
                ...state.itemMap,
                [createdItem.id]: createdItem,
              },
            }));
            this._created.set(createdItem);
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Error creating item');
          },
        });

      this._createItem.set(null); // reset
    });

    effect(() => {
      if (this.created()) {
        this._created.set(null); // reset for next trigger
      }
    });

    // Effect: Update
    effect(() => {
      const dto = this._updateItem();
      if (!dto || dto.id == null) return;

      this.isLoading.set(true);
      this.error.set(null);

      this._apiService
        .update(dto)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: (updatedItem) => {
            this.state.update((state) => ({
              items: state.items.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
              ),
              itemMap: {
                ...state.itemMap,
                [updatedItem.id]: updatedItem,
              },
            }));

            this._updated.set(updatedItem);
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Error updating item');
          },
        });

      this._updateItem.set(null); // reset
    });

    effect(() => {
      if (this.updated()) {
        this._updated.set(null); // reset
      }
    });

    // Effect: Delete
    effect(() => {
      const id = this._deleteItem();
      if (id == null) return;

      this.isLoading.set(true);
      this.error.set(null);

      this._apiService
        .delete(id)
        .pipe(finalize(() => this.isLoading.set(false)))
        .subscribe({
          next: () => {
            this.state.update((state) => {
              const { [id]: removed, ...restItemMap } = state.itemMap;
              const items = state.items.filter((item) => item.id !== id);

              return {
                items,
                itemMap: restItemMap,
              };
            });

            this._deleted.set(id);
          },
          error: (err) => {
            this.error.set(err?.message ?? 'Error deleting item');
          },
        });

      this._deleteItem.set(null); // reset
    });

    effect(() => {
      if (this.deleted()) {
        this._deleted.set(null);
      }
    });

    // Effect: Error reporting
    effect(() => {
      const message = this.error();
      if (message) {
        console.error(`[EntityStateService] Error: ${message}`);
      }
    });
  }

  // ────────────────────────────────
  //  Public Methods
  // ────────────────────────────────
  public create(dto: Omit<T, 'id'>) {
    this._createItem.set(dto);
  }

  public update(dto: Partial<T>) {
    this._updateItem.set(dto);
  }

  public loadAll() {
    this._loadAll.set(true);
  }

  public loadOne(id: number) {
    this._loadOne.set(id);
  }

  public delete(id: number) {
    this._deleteItem.set(id);
  }
}
