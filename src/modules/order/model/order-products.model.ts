import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Table,
} from 'sequelize-typescript';
import { BaseModel } from '../../../common/model/base.model';
import Order from './order.model';
import Product from '../../product/model/product.model';

@Table
export default class OrderProduct extends BaseModel {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.UUID,
  })
  orderId: string;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
  })
  productId: string;
}
