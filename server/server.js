const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = 8000;

app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Methods",
            "OPTIONS, HEAD, GET, PUT, POST, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    })

app.use(express.json());
app.use(cors());

//transporter object

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", (req, res) => {

    let mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMAIL,
        subject: `Message from: ${req.body.email}`,
        text: `${req.body.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully");
            res.json({ status: 200 });
        }
    });
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})