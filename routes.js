const branchController = require('./controllers/branch');
const facultyController = require('./controllers/faculty');
const studentController = require('./controllers/student');
const subjectController = require('./controllers/subject');



module.exports = async(app) => {
    app.post('/branch', branchController.create);
    app.post('/faculty', facultyController.create);
    app.post('/student', studentController.create);
    app.post('/subject', subjectController.create);

    app.get('/branch', branchController.getAll);


}