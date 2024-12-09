const {Sequelize,DataTypes,where} = require("sequelize");
const {sequelize} = require("../models/user");

const Book = sequelize.define("books", {
    bookname: {
      type: DataTypes.STRING
      
    },
    Authorname: {
      type: DataTypes.STRING
     
    },
    Price: {
      type: DataTypes.INTEGER
     
    },
    Description: {
      type: DataTypes.STRING
  
    }
 });

 module.exports = {Book};