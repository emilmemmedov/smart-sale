import { Body, Get, JsonController, Post } from 'routing-controllers';
import OrderService from '../service/order.service';
import { Container } from 'typedi';
import { CreateOrderRequestDto } from '../dto/create-order-request.dto';
import { HttpResponse } from '../../../common/types/http.response';

@JsonController('/order')
export class OrderController {
  private orderService: OrderService;
  constructor() {
    this.orderService = Container.get(OrderService);
  }

  @Post()
  async createOrder(@Body() data: CreateOrderRequestDto) {
    const products = await this.orderService.createOrder(data);
    return HttpResponse.build(products);
  }

  @Get()
  async getOrders() {
    const orders = await this.orderService.getOrders();
    return HttpResponse.build(orders);
  }
}
