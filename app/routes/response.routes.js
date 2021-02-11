module.exports = function(app) {
    
    var router = require("express").Router();

    const responses = require('../controllers/reponse.controller.js');
 

    var router = require("express").Router();
  
    // Create a new response
    router.post("/add", responses.create);
  
    // Retrieve all responses
    router.get("/getAll", responses.findAll);

    
    app.use('/api/responses', router);
}