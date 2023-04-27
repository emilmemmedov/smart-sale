import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderRequestDto {
  @IsArray()
  productIds: string[];
}
