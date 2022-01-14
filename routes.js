const branchController = require('./controllers/branch');
module.exports = async(app) => {
   app.post('/branch',branchController.create);
}