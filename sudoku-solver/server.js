// Install Packages:
// npm i axios express cors dotenv
// npm i nodemon - To run the scrip automatically without refresh the script
// ^X^C to clear the terminal

const PORT = 8000;
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))
