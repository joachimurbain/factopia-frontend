import { BaseEntity } from '../core/data-access/base-entity.model';

export interface Resource extends BaseEntity {
  name: string;
  path: string;
  resourceType: ResourceType;
  isCorrect: boolean;
  questionId: number;
}

export enum ResourceType {
  video,
  image,
}
