let express = require('express'),
    app = express(),
    http = require('http').Server(app);
app.get('/', (req, res) => {
    console.log('logged user')
    res.status(200).send('Welcome to mini project')
    console.log('welcome to vcet')
})
require("./node")(app);
http.listen(5000);
console.log('Server is running on port ' + ' ' + 5000, "");

module.exports = app;
