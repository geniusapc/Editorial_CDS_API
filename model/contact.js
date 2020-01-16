const Joi = require("joi");
const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = require("./db")

class ContactMessage extends Model{}

ContactMessage.init(
    {   name:DataTypes.STRING,
        stateCode:DataTypes.STRING,
        email:DataTypes.STRING,
        pnumber:DataTypes.BIGINT, 
        message:DataTypes.STRING,
        status: {type:Sequelize.STRING, defaultValue:"unread"}
    }, 
    {   sequelize, 
        modelName:"contactmessage"
    }
);

ContactMessage.validate = schemaCompare=>(
    Joi.validate(schemaCompare, {
        name:Joi.string().min(3).max(50).required(),
        stateCode:Joi.string().max(50).required(),
        email:Joi.string().max(100).email(),
        pnumber:Joi.number().required(), 
        message:Joi.string().max(225).required(),
    })
);

sequelize.sync()

module.exports = ContactMessage;

