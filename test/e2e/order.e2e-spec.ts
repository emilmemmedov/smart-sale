import 'jest';
import * as request from 'supertest';
import App from '../../src/app';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../../src/logging/logger';
import { sequelize } from '../../src/sequelize';
import { productMocks } from '../utils/mocks';
import { CreateOrderRequestDto } from '../../src/modules/order/dto/create-order-request.dto';

describe('Order E2E Test', function () {
  let app;
  let productId;

  beforeAll(async () => {
    const application = new App();
    await application.init();
    app = await application.express;

    await sequelize
      .sync({ force: true })
      .then(() => {
        logger.info('Connected to Database');
      })
      .catch((err) => {
        console.log('Database Error: ', err);
      });
  });

  describe('POST /api/v1/product', () => {
    it('should do create product', async () => {
      const createProductDto = productMocks[0];

      const product = await request(app)
        .post('/api/v1/product')
        .send(createProductDto)
        .expect(StatusCodes.OK)
        .then((response) => response.body.data);

      expect(product).toMatchObject({
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
      });

      productId = product.id;
    });
  });

  describe('POST /api/v1/order', () => {
    it('should do create product', async () => {
      const createOrderDto = new CreateOrderRequestDto();
      createOrderDto.productIds = [productId];

      const orderResponse = await request(app)
        .post('/api/v1/order')
        .send(createOrderDto)
        .expect(StatusCodes.OK)
        .then((response) => response.body.data);

      expect(orderResponse).toHaveLength(1);
      expect(orderResponse[0]).toMatchObject({
        name: productMocks[0].name,
        description: productMocks[0].description,
        price: productMocks[0].price,
      });
    });
  });
});
