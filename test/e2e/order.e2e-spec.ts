import 'jest';
import * as request from 'supertest';
import App from '../../src/app';
import { StatusCodes } from 'http-status-codes';

describe('Order E2E Test', function () {
  let app;

  beforeAll(async () => {
    const application = new App();
    await application.init();
    app = await application.express;
  });

  describe('POST /api/v1/order', () => {
    it('should do smth', async () => {
      const order = await request(app)
        .post('/api/v1/order')
        .send()
        .expect(StatusCodes.OK)
        .then((response) => response.body);
    });
  });
});
