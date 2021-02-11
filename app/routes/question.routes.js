
module.exports = app => {
    const questions = require("../controllers/question.controller");
  
    var router = require("express").Router();
  
    // Create a new question
    router.post("/add", questions.create);
  
    // Retrieve all questions
    router.get("/getAll", questions.getAll);
  
  
    // Retrieve a single question with id
    router.get("/getOne/:id", questions.findOne);
  

  
    app.use('/api/questions', router);
  };