const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, User, Product } = require('../../models');

// get all categories for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Category.findAll({
      attributes: [
        'id',
        'category_name',
        'category_desc'
      ]
    })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get single categories
  router.get('/categories/:id', (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'category_name',
        'category_desc'
      ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // post a category
  router.post('/', withAuth, (req, res) => {
    // expects => {"category_desc": "Test description", "category_name": "Food Items"}
    Category.create({
      category_desc: req.body.category_desc,
      category_name: req.body.category_name,
      user_id: req.session.user_id,
    })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  module.exports = router;