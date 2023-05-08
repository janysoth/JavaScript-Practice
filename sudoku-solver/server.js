// Install Packages:
// npm i axios express cors dotenv
// npm i nodemon - To run the scrip automatically without refresh the script
// ^X^C to clear the terminal

const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Fetch the API from the backend:
// Creating a new root:
app.post('/solve', (req, res) => {
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
    data: {
      puzzle: req.body.numbers,
    },
  };

  axios.request(options).then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
