const db = require("../utils/db");
module.exports.create = async(req, res, next) => {
    try {
        let data = {};
        if (req.body.hasOwnProperty('name')) {
            //validate input data here
            data.name = req.body.name.trim();
        }
        if (req.body.hasOwnProperty('usn')) {
            //validate input data here
            data.usn = req.body.usn.trim();
        }
        if (req.body.hasOwnProperty('sem')) {
            //validate input data here
            data.sem = req.body.sem.trim();
        }
        if (req.body.hasOwnProperty('dob')) {
            //validate input data here
            data.dob = req.body.dob.trim();
        }
        if (req.body.hasOwnProperty('father_name')) {
            //validate input data here
            data.father_name = req.body.father_name.trim();
        }
        if (req.body.hasOwnProperty('mother_name')) {
            //validate input data here
            data.mother_name = req.body.mother_name.trim();
        }
        if (req.body.hasOwnProperty('branch')) {
            //validate input data here
            data.branch = req.body.branch.trim();
        }
        if (req.body.hasOwnProperty('address')) {
            //validate input data here
            data.address = req.body.address.trim();
        }
        if (req.body.hasOwnProperty('gender')) {
            //validate input data here
            data.gender = req.body.gender.trim();
        }
        if (req.body.hasOwnProperty('phone')) {
            //validate input data here
            data.phone = req.body.phone.trim();
        }
        if (req.body.hasOwnProperty('email')) {
            //validate input data here
            data.email = req.body.email.trim();
        }
        const student = await db.Student.create(data);
        res.status(200).json(student);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message || "Error in creating student" })
    }

}