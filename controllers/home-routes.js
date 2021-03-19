const router = require('express').Router();
const { User, Product, Category } = require('../models');

// get all products for homepage
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
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));

      res.render('homepage', {
        products,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single product
router.get('/product/:id', (req, res) => {
  product.findOne({
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
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }

      const product = dbProductData.get({ plain: true });

      res.render('single-product', {
        product,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
