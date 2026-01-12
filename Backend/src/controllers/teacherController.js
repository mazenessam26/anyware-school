const Teacher = require('../models/teacher');
const {validationResult} = require('express-validator');

exports.createTeacher = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {name,profilePicture} = req.body;
    const teacher = new Teacher({name,profilePicture});
    await teacher.save();
    res.status(201).json(teacher)

}