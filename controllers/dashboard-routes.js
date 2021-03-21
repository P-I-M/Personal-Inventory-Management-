const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product,Category } = require('../models');
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

//route to add new product
router.get('/new',withAuth, (req, res) => {
    Category.findAll({
        attributes: [
          'id',
          'category_name',
          'category_desc'
        ]
      })
      .then(dbPostData => {
        
        const categories = dbPostData.map(category =>category.get({ plain:true}));
        res.render('add-product', { categories, loggedIn: true });
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

//route to add new product
router.get('/add/:id',withAuth, (req, res) => {    
    
    if(req.params.id == 1)
    {
        res.render('add-grocery');
    }
    if(req.params.id == 2)
    {
        res.render('add-medicine');
    }
    if(req.params.id == 3)
    {
        res.render('add-cosmetics');
    }
    if(req.params.id == 4)
    {
        res.render('add-book');
    }
});

module.exports = router;