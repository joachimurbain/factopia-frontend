import { BaseEntity } from '../core/data-access/base-entity.model';

export interface GameType extends BaseEntity {
  title: string;
  description: string;
}
