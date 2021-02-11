const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.responses = require("./reponse.model.js")(sequelize, Sequelize);
db.questions = require("./question.model.js")(sequelize, Sequelize);


db.questions.hasMany(db.responses, { as: "responses" });
db.responses.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question",
  });

module.exports = db;
