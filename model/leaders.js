const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("./db");
const Joi = require("joi");

class Leaders extends Model {}

Leaders.init(
  {
    imageName: DataTypes.STRING,
    name: DataTypes.STRING,
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [["LGI", "CLO", "EDITOR"]]
      }
    },
    position: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "leader"
  }
);
Leaders.findCreateFind({
  where: { title: "LGI" },
  defaults: { imageName: "", name: "", position: "" }
});
Leaders.findCreateFind({
  where: { title: "CLO" },
  defaults: { imageName: "", name: "", position: "" }
});
Leaders.findCreateFind({
  where: { title: "EDITOR" },
  defaults: { imageName: "", name: "", position: "" }
});

Leaders.validate = schemaCompare => {
  return Joi.validate(schemaCompare, {
    name: Joi.string().required(),
    title: Joi.string()
      .valid(["lgi", "clo", "editor"])
      .required(),
    position: Joi.string().required()
  });
};

Leaders.validationImage = schemaCompare => {
  return Joi.validate(schemaCompare, {
    mimetype: Joi.string()
      .valid(["image/jpeg", "image/png"])
      .required()
  });
};


sequelize.sync();

module.exports = Leaders;
