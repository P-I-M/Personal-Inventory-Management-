const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
