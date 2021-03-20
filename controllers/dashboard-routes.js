const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
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
    const products = dbProductData.map(product => product.get({ plain: true }));
    res.render('dashboard', { products, loggedIn: true });
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/edit/:id', withAuth, (req, res) => {
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
    .then(dbProductData => {
        if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
    }

    const product = dbProductData.get({ plain: true });
        res.render('edit-product', { product, loggedIn: true });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
})

router.get('/create/', withAuth, (req, res) => {
    Product.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
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
        // serialize data before passing to template
        const products = dbProductData.map(product => product.get({ plain: true }));
        res.render('create-post', { products, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/new', (req, res) => {
    res.render('new-product');
});

module.exports = router;