const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    experience:String,
    empType:String,
    salary:Number,
    location:String,
    description:String,
    qualification:String,
    role:String,
    industryType:String,
    department:String,
    category:String,
    education:String,
    aboutcompany:String,
    hrname: String
})

module.exports = mongoose.model('Admin', adminSchema);