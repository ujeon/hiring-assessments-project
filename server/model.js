const Sequelize = require("sequelize");

const sequelize = new Sequelize("usersData", "root", "ujeon1020!@", {
  host: "localhost",
  dialect: "mysql"
});
sequelize.sync();

module.exports = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  phone: {
    type: Sequelize.STRING
  }
});
