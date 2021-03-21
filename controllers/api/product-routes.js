const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User, Product } = require('../../models');

// get all products
router.get('/', (req, res) => {
    console.log('======================');
    Product.findAll({
      attributes: [
        'id',
        'product_name',
        'prod_desc',
        'price',
        'stock',
        'mfg_date',
        'exp_date',
        'author_name',
        'category_id'
      ],
      include: [
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  // get single product
  router.get('/product/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'product_name',
        'prod_desc',
        'price',
        'stock',
        'mfg_date',
        'exp_date',
        'author_name',
        'category_id'
      ],
      include: [
        {
          model: User,
          attributes: ['email']
        }
      ]
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
    // post a Product
    router.post('/', withAuth, (req, res) => {
      // expects => {    "product_name": "Lip gloss", "prod_desc": "Lakme", "price": "20", "stock": 3, "mfg_date": "2021-01-01T00:00:00.000Z", "exp_date": "2022-01-01T00:00:00.000Z","category_id": 3}
      
      Product.create({
        product_name: req.body.product_name,
        prod_desc: req.body.prod_desc,
        price: req.body.price,
        stock: req.body.stock,
        mfg_date: req.body.mfg_date,
        exp_date: req.body.exp_date,
        category_id: req.body.category_id,
        user_id: req.session.user_id,
      })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    });
  
  module.exports = router;