import { Column, Table } from 'sequelize-typescript';
import { BaseModel } from '../../../common/model/base.model';

@Table
export default class User extends BaseModel {
  @Column
  name: string;
}
