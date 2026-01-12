const mongoose = require('mongoose');

const announcmentSchema = new mongoose.Schema({
    course:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }
})

const Announcment = mongoose.model('Announcment', announcmentSchema);
module.exports = Announcment;