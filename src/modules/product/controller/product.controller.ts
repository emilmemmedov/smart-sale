import { Body, Controller, JsonController, Post } from 'routing-controllers';
import { CreateProductRequestDto } from '../dto/create-product-request.dto';
import { HttpResponse } from '../../../common/types/http.response';
import ProductService from '../service/product.service';
import { Container, Inject } from 'typedi';

@JsonController('/product')
export default class ProductController {
  private productService: ProductService;
  constructor() {
    this.productService = Container.get(ProductService);
  }
  @Post()
  async createProduct(@Body() data: CreateProductRequestDto) {
    await this.productService.createProduct(data);

    return HttpResponse.build({ data });
  }
}