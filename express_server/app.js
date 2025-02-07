const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());


const port = 3000;

app.listen(port, () => {
    console.log("Now listening on port", port);
});

app.get("/cats", (req, res) => {
  const data = { catsArray: ["Ragdoll", "Moggy", "Siamese"] } 
  res.send(data);
});