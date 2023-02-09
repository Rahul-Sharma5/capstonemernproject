const mongoose = require('mongoose');

const appliedjobSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    
    jobid:String,
    userid:String,
    username:String

})



module.exports = mongoose.model('Applied', appliedjobSchema);