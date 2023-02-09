const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
/* const multer = require("multer"); */


// ! Connection User Model file
const User = require('../model/user');
/* router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'user router working'
    })
}) */

// ! Signup Router //
router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: "please fill all data" })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                name: req.body.name,
                email: req.body.email,
                userType: req.body.userType,
                password: hash
            })
            user.save()
                .then(result => {
                    res.status(200).json({
                        new_user: result
                    })
                })
                .catch(err => {
                    res.status(500).json({ message: 'signup error' })
                })
        }
    })
})


// ! Loginin Router //
router.post('/signin', (req, res, next) => {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Plz Filled the data" })
    }

    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    msg: 'user not found'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        msg: 'Password wrong'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        name: user[0].name,
                        email: user[0].email,
                        userType: user[0].userType,
                        theme: "red",
                        id: user[0]._id
                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        }
                    );
                    res.status(200).json({
                        /* name:user[0].name,
                        email:user[0].email, */
                        token
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

})


// ! Patch Requset // Additional User Details  //
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });

        /* console.log(updateduser); */
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(500).json(error);
    }
})


router.get('/viewuser/:id', (req, res, next) => {
    /* console.log(req.params.id); */
    User.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
})


// ! Send Otp //
router.post("/send-otp", async (req, res) => {
    // console.log(req.body)

    const _otp = Math.floor(100000 + Math.random() * 900000)
    /* console.log(_otp) */

    let user = await User.findOne({ email: req.body.email })
    // send to user mail
    if (!user) {
        res.send({ code: 500, message: 'user not found' })
    }

   /*  let testAccount = await nodemailer.createTestAccount()

    let transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 465,
        secure: true,
        auth: {
            user: 'viratraj9905@gmail.com',
            pass: 'sgmysphtdeqtitbt',
        }
    })

    let info = await transporter.sendMail({
        from: 'viratraj9905@gmail.com',
        to: req.body.email, // list of receivers

        subject: "OTP", // Subject line
        text: String(_otp),
        html: `<html>
            < body >
            Hello and welcome
        </ >
       </html > `,
    }) */

         // console.log(info, 84)

        User.updateOne({ email: req.body.email }, { otp: _otp })
            .then(result => {
                res.send({ code: 200, message: 'otp send' ,otp:_otp})
            })
            .catch(err => {
                res.send({ code: 500, message: 'Server err' })

            })

    
})


// ! Sumbit Otp //
router.post("/submit-otp", async (req, res) => {
    // console.log(req.body)

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: "please fill all data" })
        }
        else {
            User.findOne({ otp: req.body.otp })
                //  update the password 
                .then(result => {

                    User.updateOne({ email: result.email }, { password: hash })
                        .then(result => {
                            res.send({ code: 200, message: 'Password updated' })
                        })
                        .catch(err => {
                            res.send({ code: 500, message: 'Server err' })

                        })


                }).catch(err => {
                    res.send({ code: 500, message: 'otp is wrong' })

                })
        }
    })




})





module.exports = router;