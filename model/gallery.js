const {Model, DataTypes} = require('sequelize')
const Joi = require("joi");
const sequelize = require("./db")

class Gallery extends Model{}

Gallery.init(
    {   imageName:DataTypes.STRING,
        text:DataTypes.STRING
    }, 
    {   sequelize, 
        modelName:"gallery"
    }
);
sequelize.sync();

Gallery.validate = schemaCompare=>{
    return Joi.validate(schemaCompare,  
        {   imagefile:Joi.any().required(),
            mimetype:Joi.string().valid(["image/jpeg", "image/png"]).required(),
            text:Joi.string().min(3).required(),  
        } 
    )
}

Gallery.uploadImage = (image, path)=>{ 
    image.mv(path, function(err) {
        if (err) return that.res.status(500).send(err);               
    });
}

module.exports = Gallery;