const { DataTypes } = require('sequelize');
const { sequelize } = require('./connectPostgres.js');

const Link = sequelize.define(
  'Link',
  {
    shortLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    counter: {
      type: DataTypes.INTEGER,
    },
  },
);

const syncModel = async () => {
  await Link.sync({ force: false });
};

module.exports = { Link, syncModel };
