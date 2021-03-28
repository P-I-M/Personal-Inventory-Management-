const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User, Product } = require('../../models');

// get all products
//route to get list of products for my calendar
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
    // Once you get the products, render them on the calendar
    .then(dbProductData => {
        const products = dbProductData.map(product => product.get({ plain: true }));
        res.render('calendar', {layout: false, products, loggedIn: true });
  })

  // If error, return the error message to the console log
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  
  });
  
  module.exports = router;