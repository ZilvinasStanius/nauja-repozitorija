// CRUD

// C - Create
// R - Read
// U - Update
// D - Delete

// Perskaityti visus produktus
// Perskaityti konkretų produktą
// Pridėti naują produktą

// Ištrinti produktą
// Attnaujinti produktą

export default class ProductRepository {
  static allProducts;

  //Statinė funkcija priklauso ne pagal klasę sukurtam objektui
  // o pačiai klasei
  static async getAllProducts() {
    const productsPromise = await fetch(
      'https://srv10.vibelink.lt/server/api/products'
    );
    const products = await productsPromise.json();
    return products;
  }

  static async getProduct(id) {
    const productPromise = await fetch(
      `https://srv10.vibelink.lt/server/api/products/${id}`
    );
    const product = await productPromise.json();
    return product;
  }

  static async addNewProduct(product) {
    const promise = await fetch(
      'https://srv10.vibelink.lt/server/api/products/',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    );
    const response = await promise.json();
    return response;
  }

  static async deleteProduct(id) {
    const response = await fetch(
      `https://srv10.vibelink.lt/server/api/products/${id}`,
      {
        method: 'DELETE',
      }
    );
    return response.ok;
  }
}
ProductRepository.allProducts = await ProductRepository.getAllProducts();
