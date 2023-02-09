const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Admin = require('../model/admin');

// ! GET Request //
router.get('/allpost',(req, res, next) => {

    Admin.find()
    .then(result => {
        res.status(200).json({
            adminData: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
})


// ! POST Request //
router.post('/addpost', (req, res, next) => {

    const admin = new Admin({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        experience: req.body.experience,
        empType: req.body.empType,
        salary: req.body.salary,
        location: req.body.location,
        description: req.body.description,
        qualification: req.body.qualification,
        role: req.body.role,
        industryType: req.body.industryType,
        department: req.body.department,
        category: req.body.category,
        education: req.body.education,
        aboutcompany: req.body.aboutcompany,
        hrname: req.body.hrname
    })

    admin.save()
        .then(result => {
            /* console.log(result); */
            res.status(200).json({
                newAdmin: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})


// ! For Get Request | retrive One Data From DataBase //
router.get('/viewpost/:id', (req, res, next) => {
    /* console.log(req.params.id); */
    Admin.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                adminData: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})

// ! For Delete Request | Delete Data From DataBase //
router.delete('/delete-jobpost/:id', (req, res, next) => {
    Admin.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'Data Deleted',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Data Not Deleted',
                error: err
            })
        })
})


module.exports = router;