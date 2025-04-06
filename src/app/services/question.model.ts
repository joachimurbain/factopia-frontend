import { Resource } from './resource.model';
import { BaseEntity } from '../core/data-access/base-entity.model';
import { GameType } from './game-type.model';
import { Answer } from './answer.model';

export interface Question extends BaseEntity {
  content: string;
  gameType: GameType;
  resources: Resource[];
  answers: Answer[];
}
