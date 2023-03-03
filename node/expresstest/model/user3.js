module.exports = (sequelize, Sequelize) => {
  const User3 = sequelize.define("user3", {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User3;
};
