const { Product } = require('../models');

const productdata = [
  {
    img_url: "https://res.cloudinary.com/personal-inventory-management/image/upload/v1616339802/samples/food/spices.jpg",
    product_name: 'Lip gloss',
    prod_desc: 'Lakme',
    price: 20,
    stock:3,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:3,
    user_id:1
  },
  {  
    product_name: 'Lipstick',
    prod_desc: 'Maybelline',
    price: 30,
    stock:3,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:3,
    user_id:1
  },
  {  
    product_name: 'Perfume',
    prod_desc: 'Gucci',
    price: 50,
    stock:1,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:3,
    user_id:2
  },
  {
    product_name: 'Carrot',
    prod_desc: 'Vegetable',
    price: 10,
    stock:5,
    mfg_date:null,
    exp_date:null,
    author_name:null,
    category_id:1,
    user_id:3
  },
  {
    product_name: 'Onion',
    prod_desc: 'Vegetable',
    price: 8,
    stock:5,
    mfg_date:null,
    exp_date:null,
    author_name:null,
    category_id:1,
    user_id:1
  },
  {
    product_name: 'Onion',
    prod_desc: 'Vegetable',
    price: 12,
    stock:3,
    mfg_date:null,
    exp_date:null,
    author_name:null,
    category_id:1,
    user_id:2
  },
  {  
    product_name: 'Tylenol adults',
    prod_desc: 'Paracetamol',
    price: 15,
    stock:1,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:2,
    user_id:4
  },
  { 
    product_name: 'Tylenol kids',
    prod_desc: 'Paracetamol',
    price: 12,
    stock:1,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:2,
    user_id:4
  },
  {  
    product_name: 'Advil',
    prod_desc: 'Paracetamol',
    price: 12,
    stock:1,
    mfg_date:'2021-01-01',
    exp_date:'2022-01-01',
    author_name:null,
    category_id:2,
    user_id:3
  },
  {
    product_name: 'Pachinko',
    prod_desc: 'Fiction book',
    price: 15,
    stock:1,
    mfg_date:null,
    exp_date:null,
    author_name:'Min Jin Lee',
    category_id:4,
    user_id:2
  },
  {
    product_name: 'A Girl Like That',
    prod_desc: 'Fiction book',
    price: 15,
    stock:1,
    mfg_date:null,
    exp_date:null,
    author_name:'Tanaz Bhatena',
    category_id:4,
    user_id:2
  },
  {
    product_name: 'How the Garcia Girls Lost Their Accents',
    prod_desc: 'Fiction book',
    price: 15,
    stock:1,
    mfg_date:null,
    exp_date:null,
    author_name:'Julia Alvarez',
    category_id:4,
    user_id:1
  }

];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;
