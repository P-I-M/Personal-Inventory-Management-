const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    profile:''
  },
  {
    email: 'rmebes1@sogou.com',
    password: 'password123',
    profile:''
  },
  {
    email: 'cstoneman2@last.fm',
    password: 'password123',
    profile:''
  },
  {
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    profile:''
  },
  {
    email: 'bsteen9@epa.gov',
    password: 'password123',
    profile:''
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
