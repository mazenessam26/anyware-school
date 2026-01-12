const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true    
        },
        profilePicture:{
            type: String
        }
    })

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;