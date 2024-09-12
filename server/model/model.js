const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    usn:{
        type:Number,
        required:true,
        unique:true
    },
        course:{
        type:String,
        required:true
    },
    sem:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    
})

const student = mongoose.model('student',schema);

module.exports=student;