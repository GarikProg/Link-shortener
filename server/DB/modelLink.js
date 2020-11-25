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
  try {
    await Link.sync({ force: false });
  } catch (error) {
    console.error('Unable to synchronize with database:', error);
  }
};

module.exports = { Link, syncModel };
