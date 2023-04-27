import { BaseModel } from '../../../common/model/base.model';
import { Column, Table } from 'sequelize-typescript';

@Table
export default class Product extends BaseModel {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;
}
