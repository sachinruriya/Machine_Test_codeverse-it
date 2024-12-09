const {Sequelize,DataTypes,where} = require("sequelize");
const {sequelize} = require("../models/user");

const Book_user = sequelize.define("bookusers", {
    username: {
      type: DataTypes.STRING
      
    },
    password: {
      type: DataTypes.STRING
     
    },
    role: {
        type: DataTypes.STRING,
        defaultValue:"user"
      }
 });

 module.exports = {Book_user};