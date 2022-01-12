let express = require('express'),
    app = express(),
    http = require('http').Server(app);
require("./utils/db.js")();
app.get('/', (req, res) => {
    console.log('logged user')
<<<<<<< HEAD
=======
    res.status(200).send('Welcome to mini project')
>>>>>>> 0ae5a997292a4668490fc879f296c81ae99a6a40
    console.log('welcome to vcet')
    res.status(200).send('Welcome to mini project')

})
<<<<<<< HEAD
require("./route")(app);
=======
require("./node")(app);
>>>>>>> 0ae5a997292a4668490fc879f296c81ae99a6a40
http.listen(5000);
console.log('Server is running on port ' + ' ' + 5000, "");

module.exports = app;
