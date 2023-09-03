const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user_register');
const ContactModel = require('./models/contact');
const app = express();

//Install nodemailer
var nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/User");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            }
            else {
                res.json("No record found")
            }
        })
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(nameuser => res.json(nameuser))
        .catch(err => res.json(err))
})


app.post('/contact', (req, res) => {

    // Email-Send
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // Some changes in user google needed. {Refer to notion-Article}
            user: 'rashid87ansari22@gmail.com', // Paste your google account mail here
            pass: 'jgjwghbgsxxrvebg' //paste the password here only
        }
    });

    var mailOptions = {
        from: '********@gmail.com', // same as of auth-user
        to: 'Veggis********@gmail.com', // to whom you want to send email
        subject: req.body.subject,
        text: req.body.message,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });



    ContactModel.create(req.body)
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
})


app.listen(5000, () => {
    console.log("Server is running")
})