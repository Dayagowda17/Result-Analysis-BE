const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
app.listen(3000, () => {
    console.log("started on port 3000");
})