const db = require("../utils/db");
module.exports.create = async(req, res, next) => {
    try {
        let data = {};
        if (req.body.hasOwnProperty('subject_code')) {
            //validate input data here
            data.subject_code = req.body.subject_code.trim();
        }
        if (req.body.hasOwnProperty('subject_name')) {
            //validate input data here
            data.subject_name = req.body.subject_name.trim();
        }
        if (req.body.hasOwnProperty('schema_year')) {
            //validate input data here
            data.schema_year = req.body.schema_year.trim();
        }
        const subject = await db.subject.create(data);
        res.status(200).json(subject);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message || "Error in creating Subject" })
    }

<<<<<<< HEAD
}

module.exports.getAll = async(req, res, next) => {
    try {
        const subjects = await db.Subject.findAll();
        res.status(200).json(subjects);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message || "Error in creating subject" })
    }
=======
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595
}