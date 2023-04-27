import { Service } from 'typedi';
import { CreateProductRequestDto } from '../dto/create-product-request.dto';
import Product from '../model/product.model';

@Service()
export default class ProductService {
  async createProduct({ name, description, price }: CreateProductRequestDto) {
    const product = Product.build({
      name,
      description,
      price,
    });

    await product.save();
  }
}
