const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');


// create associations
User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey : 'category_id'
});


module.exports = { User,Product,Category};