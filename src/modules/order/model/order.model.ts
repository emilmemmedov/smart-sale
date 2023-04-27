import { Column, HasMany, HasOne, Table } from 'sequelize-typescript';
import { BaseModel } from '../../../common/model/base.model';
import OrderProduct from './order-products.model';

@Table
export default class Order extends BaseModel {
  @Column
  totalPrice: number;

  @HasMany(() => OrderProduct)
  products: OrderProduct[];
}
