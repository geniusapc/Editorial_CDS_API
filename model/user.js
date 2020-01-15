const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = require("./db");

const config = require("../config");
const Joi = require("joi");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Users extends Model{}

Users.init(
    {   stateCode:DataTypes.STRING, 
        password: DataTypes.STRING, 
        isAdmin:{type:Sequelize.BOOLEAN, defaultValue:false},
        role:{
            type:Sequelize.STRING,
            allowNull : false,
            defaultValue: "USER",
            validate:{
                isIn:[["EDITOR", "MODERATOR", "USER"]]
            }
        }
    }, 
        {   sequelize, 
        modelName:"users"
    }
);

Users.beforeCreate((user, option)=>{
    return Users.hashedPassword(user.password).then(hashPw=>{user.password = hashPw});
});


Users.hashedPassword = async(password)=> {
    let salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
 

Users.generateAuthToken = payload =>jwt.sign(payload, config.jwtPass);

Users.verifyPassword = async(password, dbpasswd)=> await bcrypt.compare(password, dbpasswd);
 
Users.findCreateFind({
    where:{
        role:"EDITOR"
    }, 
    defaults:{
        isAdmin:true,
        stateCode:config.adminStateCode,
        password:config.adminPassword
    }
})

Users.validateRegistration = schemaCompare => {
    let pattern = /^([O, Y]{2}\/)([0-9]{2}[A,B,C]\/)([0-9]{4})$/;
    let stateCodeErr = "State code is required and must be of this pattern 'OY/19B/0000' (in uppercase)";

    return Joi.validate(schemaCompare, 
        {
            stateCode: Joi.string().trim().regex(pattern).required().error(error =>{return { message: stateCodeErr }} ),
            password: Joi.string().trim().required(),
            confirmPassword: Joi.string().valid(Joi.ref('password')).options({
                language:{
                    any:{allowOnly: "must match password"}
                }
            }).required()
        }
    );
}

Users.validateLogin = schemaCompare => {
    
    let stateCodeErr = "State code is required and must be of this pattern 'OY/19B/0000' (in capitals)";

    return Joi.validate(schemaCompare, 
        {
            stateCode: Joi.string().trim().required().error(error =>{return { message: stateCodeErr }} ),
            password: Joi.string().trim().required()
        }
    );
}

sequelize.sync()

module.exports= Users; 