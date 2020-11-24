const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.URL_DB, {
    define: {
      freezeTableName: true,
    },
  },
);
const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to DB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectPostgres, sequelize };
