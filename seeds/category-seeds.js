const { Category } = require('../models');

const categorydata = [
  {
    category_name: 'Food',
    category_desc: 'all food products belongs to this category'
  },
  {
    category_name: 'Medicine',
    category_desc: 'all medicines belongs to this category'
  },
  {
    category_name: 'Cosmetics',
    category_desc: 'all cosmetics belongs to this category'
  },
  {
    category_name: 'Books',
    category_desc: 'all books belongs to this category'
  },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;
