import {
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';
import { IsUUID } from 'class-validator';

export class BaseModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
