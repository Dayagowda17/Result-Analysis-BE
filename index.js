const express = require('express');
const index = express();
index.get('/', (req, res) => {
    res.send("Hello");
});
index.listen(process.env.port || 4000);
console.log("web server is listening at port " + (process.env.port || 4000));