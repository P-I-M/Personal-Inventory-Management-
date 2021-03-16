const { Product } = require('../models');

const productdata = [
  {
    product_name: 'Lip gloss',
    prod_desc: 'Lakme',
    price: 20,
    stock:3,
    category_id:2,
    user_id:1
  },
  {
    product_name: 'Lip gloss',
    prod_desc: 'Maybelline',
    price: 25,
    stock:2,
    category_id:2,
    user_id:2
  },
  {
    product_name: 'Tomato',
    prod_desc: 'grocery',
    price: 10,
    stock:6,
    category_id:1,
    user_id:1
  },
  {
    product_name: 'Onion',
    prod_desc: 'grocery',
    price: 10,
    stock:4,
    category_id:1,
    user_id:2
  }
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
