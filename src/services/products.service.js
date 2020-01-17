import products from '../products/products.json';

class ProductsService {
  static getProducts() {
    return products;
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;