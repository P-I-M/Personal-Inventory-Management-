const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product, Category } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require("sequelize");

/* get all products route
router.get('/', withAuth, (req, res) => {
  Product.findAll({
      where: {
          user_id: req.session.user_id
      },
      attributes: [
          'id',
          'img_url',
          'product_name',
          'prod_desc',
          'price',
          'stock',
          'mfg_date',
          'exp_date',
          'author_name',
          'category_id',
      ],
      include: [ 
          {
              model: User, 
              attributes: ['email', 'profile']
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
*/

//route to get list of products for logged in user not expired

router.get('/suggestion', withAuth, (req, res) => {
  const NOW = new Date();
  Product.findAll({
    where: { 
      [Op.and]: {

      [Op.or]: [
        { category_id:{[Op.eq]: 4} },
        { exp_date: {[Op.gt]: NOW}}
      ],     
      
        user_id: req.session.user_id 
            
      }
    }
  })
  .then(dbProductData => {
  const products = dbProductData.map(product => product.get({ plain: true }));
  res.render('daily-suggestion', {layout: false, products, loggedIn: true });
})
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});




//route for profile picture

router.get('/', withAuth, (req, res) => {
  User.findAll({
      where: {
          id: req.session.user_id
      },
      attributes: ['id','profile'],
      
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

//route to get list of products for my inventory
router.get('/products', withAuth, (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'img_url',
            'product_name',
            'prod_desc',
            'price',
            'stock',
            'mfg_date',
            'exp_date',
            'author_name',
            'category_id',
            [sequelize.literal('(SELECT category_name FROM category WHERE product.category_id = category.id)'), 'cat_name'] 
        ],
        order: [['category_id', 'ASC']],
        include: [ 
            {
                model: User, 
                attributes: ['email']
            }
        ]   
    })
    .then(dbProductData => {
    const products = dbProductData.map(product => product.get({ plain: true }));
    res.render('inventory-list', {layout: false, products, loggedIn: true });
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});


//route to get list of products for my calendar
router.get('/calendar', withAuth, (req, res) => {
  Product.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
          'id',
          'img_url',
          'product_name',
          'prod_desc',
          'price',
          'stock',
          'mfg_date',
          'exp_date',
          'author_name',
          'category_id',
          [sequelize.literal('(SELECT category_name FROM category WHERE product.category_id = category.id)'), 'cat_name'] 
      ],
      order: [['mfg_date', 'DESC']],
      include: [ 
          {
              model: User, 
              attributes: ['email']
          }
      ]   
  })
  .then(dbProductData => {
      const products = dbProductData.map(product => product.get({ plain: true }));
      res.render('calendar', {layout: false, products, loggedIn: true });
})
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });

});

router.get('/edit/:category_id/:id', withAuth, (req, res) => {
    Product.findOne({
    where: {
        id: req.params.id
    },
    attributes: [
        'id',
        'img_url',
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
        if(req.params.category_id == 4)
        {
            res.render('edit-book', { layout: false, product, loggedIn: true });
        }
        else
        {
        res.render('edit-product', { layout: false,  product, loggedIn: true });
        }
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.get('/create/', withAuth, (req, res) => {
    Product.findAll({
      where: {
        // use the ID from the session
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'img_url',
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
        res.render('create-post', { layout: false, products, loggedIn: true });
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
        res.render('add-product', { layout: false, categories, loggedIn: true });
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
        res.render('add-grocery', { layout: false});
    }
    if(req.params.id == 2)
    {
        res.render('add-medicine',{ layout: false});
    }
    if(req.params.id == 3)
    {
        res.render('add-cosmetics',{ layout: false});
    }
    if(req.params.id == 4)
    {
        res.render('add-book',{ layout: false});
    }
});

router.get('/delete',withAuth, (req, res) => {   
    Product.findAll({
        where: {
          // use the ID from the session
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'img_url',
          'product_name',
          'prod_desc',
          'price',
          'stock',
          'mfg_date',
          'exp_date',
          'author_name',
          'category_id',
          [sequelize.literal('(SELECT category_name FROM category WHERE product.category_id = category.id)'), 'cat_name'] 
        ],
        order: [['category_id', 'ASC']],
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
          res.render('delete-product', { layout: false, products, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;