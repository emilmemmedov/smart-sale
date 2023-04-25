import { Controller, Get, JsonController } from 'routing-controllers';

@JsonController('/order')
export class OrderController {
  @Get()
  findAllOrder() {
    return {
      success: true,
      data: [],
    };
  }
}
