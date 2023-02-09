const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Applied = require('../model/appliedjob')
const User = require('../model/user');


router.post('/job',async (req, res, next) =>{

    const data = await Applied.find({jobid:req.body.jobid,userid:req.body.userid})     
    if(data.length>0){
        return res.status(500).json({"error":"already exists"})
    }

    const applied = new Applied({
        _id: new mongoose.Types.ObjectId,
        jobid : req.body.jobid,
        userid : req.body.userid,
        username:req.body.username

    })
   
    applied.save()
        .then(result => {
           /*  console.log(result); */
            res.status(200).json({
                newApplied: result
            })
        })
        .catch(err => {
            /* console.log(err); */
            res.status(500).json({
                error: err
            })
        })






})


router.get('/viewapplied/:id', (req, res, next) => {
    
    Applied.find({"jobid":req.params.id})
        .then(result => {
            res.status(200).json({
                "appliedJob": result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})



module.exports = router;