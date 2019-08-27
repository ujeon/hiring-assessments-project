const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const User = require("./model");

const app = express();

app.use(cors());
// app.use(bodyParser());

app.get("/users", (req, res) => {
  User.findAll().then(resolve => {
    let result = resolve.map(el => {
      return el.dataValues;
    });

    res.send(JSON.stringify(result));
  });
});

app.listen(3001, () => {
  console.log("Server is starting on 3001");
});
