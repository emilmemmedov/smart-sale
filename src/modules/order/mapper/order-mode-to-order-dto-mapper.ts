import Order from '../model/order.model';

export const orderModeToOrderDtoMapper = (order: Order) => {
  return {
    id: order.id,
    products: order.products.map((orderProduct) => {
      return {
        ...orderProduct.product.dataValues,
      };
    }),
  };
};
