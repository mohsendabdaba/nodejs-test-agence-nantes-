const db = require("../models");
const Response = db.responses;
const Question = db.questions;

// Post a response
exports.create = (req, res) => {
  return  Response.create({
        question: req.body.question,
        questionId: req.body.questionId,
    })
    .then(createdResponse=> {
        res.send(createdResponse);
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

// get all questions includs responses
exports.findAll = (req, res) => {
  Question.findAll({
        include: ["responses"]
    }).then(questions => {
        res.send(questions);
       
    });
};



