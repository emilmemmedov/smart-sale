import { CreateProductRequestDto } from '../../src/modules/product/dto/create-product-request.dto';

export const productMocks: CreateProductRequestDto[] = [
  {
    name: 'Burger',
    description: 'Burger Description',
    price: 450,
  },
];
