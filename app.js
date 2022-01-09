let express = require('express'),
    app = express(),
    http = require('http').Server(app);
app.get('/', (req, res) => {
    console.log('Health check')
    res.status(200).send('Welcome to mini project')
    console.log('welcome to vcet')
})
require("./route")(app);
http.listen(3000);
console.log('Server is running on port ' + ' ' + 3000, "");

module.exports = app;