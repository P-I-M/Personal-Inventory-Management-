const { Category } = require('../models');

const categorydata = [
  {
    category_name: 'Grocery',
    category_desc: 'grocery'
  },
  {
    category_name: 'Make-up',
    category_desc: 'Makeup'
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
