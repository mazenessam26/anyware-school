const mongoose = require('mongoose');

const status = ['quiz','assignment'];

const quizschema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    type:{
        type:String,
        enum:status
    },
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