// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    img_url: {
      type: DataTypes.STRING,
      defaultValue:"https://images.newscientist.com/wp-content/uploads/2019/10/16151942/cataglyphisbombycinasoldier1uniulmdouzfotohwolf.jpg",
      allowNull: true, 
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_desc:{
        type: DataTypes.STRING,
        allowNull:true
    },
    price:{
      type : DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:10,
      validate: {
        isNumeric: true
      }
    },
    mfg_date:{
      type: DataTypes.DATE,
      allowNull: true
    },
    exp_date:{
      type: DataTypes.DATE,
      allowNull: true
    },
    author_name:{
      type: DataTypes.STRING,
      allowNull:true
    },
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
