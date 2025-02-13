const express = require("express");
const cors = require("cors");

const app = express(); //This creates our web application 

app.use(cors()); //This application should allow requests from different domains 

const port = 3000; //defining what port the application should use 

app.listen(port, () => {
  console.log("Now listening on port", port);
});

// url
// METHOD
// Write a function that will run when the endpoint is called 

app.get("/cats", (req, res) => {
    //req = request
    //res = response
    const data = { catsArray: ["Ragdoll", "Moggy", "Siamese"] };
    res.send(data); //converted into JSON data 
});

module.exports = app; 

