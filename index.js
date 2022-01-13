let express = require('express'),
    app = express(),
    http = require('http').Server(app);
require("./utils/db.js").init();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({
    extended: true,
    limit: '150mb',
}));
app.get('/', (req, res) => {
    console.log('logged user')
    console.log('welcome to vcet')
    res.status(200).send('Welcome to mini project')
})
require("./routes")(app);

http.listen(5000);
console.log('Server is running on port ' + ' ' + 5000, "");

module.exports = app;