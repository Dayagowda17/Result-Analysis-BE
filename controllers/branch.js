const db  = require("../utils/db");
module.exports.create = async(req,res,next) => {
    try{
    let data = {};
    if(req.body.hasOwnProperty('branch_name')){
        //validate input data here
        data.branch_name = req.body.branch_name.trim();
    }
    if(req.body.hasOwnProperty('branch_short_name')){
        //validate input data here
        data.branch_short_name = req.body.branch_short_name.trim();
    }
    const branch = await db.Branch.create(data);
    res.status(200).json(branch);
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message || "Error in creating branch"})
    }
    
}
