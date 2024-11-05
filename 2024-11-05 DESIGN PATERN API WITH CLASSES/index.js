import ProductRepository from './repositories/ProductRepository.js';

console.log(ProductRepository.allProducts);

ProductRepository.addNewProduct({
  categoryId: 6,
  price: 5,
  title: 'Zvake su ilgu laikikliu',
});
// const product = await getProduct(2);
// console.log(product);
ProductRepository.deleteProduct(2464);
