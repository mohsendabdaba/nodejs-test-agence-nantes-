const db = require("../models");

const Question = db.questions;

const Op = db.Sequelize.Op;





//Create and Save a new question:
exports.create = (req, res) => {
  if (!req.body.question) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const question = {
    question: req.body.question,
  };

  Question.create(question)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      assert.isNotOk(error,'Promise error');
      done();
    });
};

// Retrieve all Questions 

exports.getAll = (req, res) => {
  Question.findAll().then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Questions"
      });
    });
};
// find question by id 

exports.findOne = (req, res) => {
  const id = req.params.id;
  Question.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Question with id=" + id
      });
    });
};





