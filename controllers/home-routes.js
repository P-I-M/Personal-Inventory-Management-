const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Items } = require('../models');

// get all items for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Items.findAll({
    attributes: [
      'id',
      'title',
      'text',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbItemData => {
      const items = dbItemData.map(item => item.get({ plain: true }));

      res.render('homepage', {
        items,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single item
router.get('/item/:id', (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'item_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: 'No item found with this id' });
        return;
      }

      const item = dbItemData.get({ plain: true });

      res.render('single-item', {
        item,
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
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
