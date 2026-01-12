const mongoose = require('mongoose');
const quizschema = mongoose.Schema({
    course:{
        type:String,
        required:true
    },
    topic:{
        type:String
    },
    dueto:{
        type:Date,
        required: true
    }
})

const Quiz = mongoose.model('Quiz',quizschema);
module.exports = Quiz;