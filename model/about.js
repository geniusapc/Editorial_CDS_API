const {Model, DataTypes} = require('sequelize')
const sequelize = require("./db");
const Joi = require("joi");

class About extends Model{}

About.init(
    {   about:DataTypes.TEXT }, 
    {   sequelize, 
        modelName:"about"
    }
);
sequelize.sync();

About.findOrCreate({
    defaults:{about:"this is the about page"}, 
    where:{id:1}
});

About.validate = (schemaCompare)=>Joi.validate(schemaCompare,  { about:Joi.string().min(10).required() } );
 
module.exports = About;
