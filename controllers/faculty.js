const db = require("../utils/db");
module.exports.create = async(req, res, next) => {
    try {
        let data = {};
        if (req.body.hasOwnProperty('kgidno')) {
            //validate input data here
            data.kgidno = req.body.kgidno.trim();
        }
        if (req.body.hasOwnProperty('name')) {
            //validate input data here
            data.name = req.body.name.trim();
        }
        if (req.body.hasOwnProperty('dob')) {
            //validate input data here
            data.dob = req.body.dob.trim();
        }
        if (req.body.hasOwnProperty('phone')) {
            //validate input data here
            data.phone = req.body.phone.trim();
        }
        if (req.body.hasOwnProperty('designation')) {
            //validate input data here
            data.designation = req.body.designation.trim();
        }
        if (req.body.hasOwnProperty('address')) {
            //validate input data here
            data.address = req.body.address.trim();
        }
        const facultys = await db.Faculty.create(data);
        res.status(200).json(facultys);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message || "Error in creating faculty" })
    }

}


module.exports.getAll = async(req, res, next) => {
    try {
        const facultys = await db.Faculty.findAll();
        res.status(200).json(facultys);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message || "Error in creating branch" })
    }
}