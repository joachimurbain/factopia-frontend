import { Component, effect, input, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-side-bar-menu',
  imports: [DrawerModule, PanelMenuModule],
  template: `
    <p-drawer
      [(visible)]="_isOpen"
      position="right"
      styleClass="!w-full md:!w-80 lg:!w-[30rem]"
      [baseZIndex]="1000"
      modal
      (onHide)="close.emit()"
    >
      <h2 class="text-lg font-semibold mb-4">Navigation</h2>
      <p-panelMenu [model]="menuItems" />
    </p-drawer>
  `,
  styles: ``,
})
export class SideBarMenuComponent {
  close = output<void>();
  logout = output<void>();
  isOpen = input.required<boolean>();
  _isOpen: boolean = false;

  constructor() {
    effect(() => {
      this._isOpen = this.isOpen();
    });
  }

  menuItems: MenuItem[] = [
    { label: 'Accueil', icon: 'pi pi-home', routerLink: ['/'] },
    { label: 'Tiktok', icon: 'pi pi-play', routerLink: ['/tiktok'] },
    {
      label: 'Choix multiple',
      icon: 'pi pi-list',
      routerLink: ['/multiple-choice'],
    },
    {
      label: 'Vrai ou faux',
      icon: 'pi pi-check-square',
      routerLink: ['/true-false'],
    },
    {
      label: 'Mots à trous',
      icon: 'pi pi-pencil',
      routerLink: ['/fill-blanks'],
    },
    {
      label: 'Déconnexion',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout.emit();
      },
    },
  ];
}
