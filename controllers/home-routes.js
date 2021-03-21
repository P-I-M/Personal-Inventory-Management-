const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product} = require('../models');

// get all products for homepage
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
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

      res.render('login', {
        products,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
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



module.exports = router;
