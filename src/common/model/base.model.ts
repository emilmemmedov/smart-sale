import {
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';
import { IsUUID } from 'class-validator';

export class BaseModel extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
