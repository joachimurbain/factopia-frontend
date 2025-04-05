import { BaseEntity } from '../core/data-access/base-entity.model';

export interface Answer extends BaseEntity {
  content: string;
  isCorrect: boolean;
  questionId: number;
}
