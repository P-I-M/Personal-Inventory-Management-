const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const seedCategory = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedCategory();
  console.log('--------------');

  await seedProducts();
  console.log('--------------');

  process.exit(0);
};

seedAll();
