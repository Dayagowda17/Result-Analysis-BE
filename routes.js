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
<<<<<<< HEAD
    app.get('/faculty', facultyController.getAll);
    app.get('/student', studentController.getAll);
    app.get('/subject', subjectController.getAll);
=======
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595


}