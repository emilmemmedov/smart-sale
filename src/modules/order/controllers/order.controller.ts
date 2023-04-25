import { Controller, Get, JsonController } from 'routing-controllers';

@JsonController('/order')
class OrderController {
  @Get()
  findAllOrder() {
    return {
      success: true,
      data: [],
    };
  }
}
export default OrderController;
