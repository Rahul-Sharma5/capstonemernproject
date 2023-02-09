const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    password:String,
    userType:String,
    address:String,
    contact:String,
    gender:String,
    state:String,
    pincode:String,
    skill:String,
    experience:String,
    workexperience:String,
    year:String,
    university:String,
    passyear:String,
    percent:String,
    otp: Number
})



module.exports = mongoose.model('User', userSchema);