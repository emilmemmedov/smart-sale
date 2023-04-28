import { Service } from 'typedi';
import { CreateOrderRequestDto } from '../dto/create-order-request.dto';
import Product from '../../product/model/product.model';
import { Op } from 'sequelize';
import OrderProduct from '../model/order-products.model';
import Order from '../model/order.model';
import ApiError from '../../../exception/ApiError';

@Service()
export default class OrderService {
  async createOrder(data: CreateOrderRequestDto) {
    const products = await Product.findAll({
      where: { id: { [Op.in]: data.productIds } },
    });
    if (products.length < data.productIds.length) {
      throw new ApiError('product ids are not correct', 400);
    }

    let totalPrice = 0;

    products.forEach((product) => {
      totalPrice += product.price;
    });

    const order = Order.build({
      totalPrice,
    });

    await order.save();
    let response = [];

    products.forEach((product) => {
      response.push(product.dataValues);
      const orderProduct = OrderProduct.build({
        orderId: order.id,
        productId: product.id,
      });
      orderProduct.save();
    });

    return response;
  }
}
