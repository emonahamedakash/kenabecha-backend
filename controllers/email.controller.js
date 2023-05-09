const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_APP_PWD
    },
})

const verifyEmail = async (name, email, vcode) =>{
    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Please verify your email",
            html: `<p>Hello ${name}, your verification code is: <b>${vcode}</b></p>`,
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { verifyEmail };


// router.post('/signup', async (req, res) => {
//     const signedUpUser = new Schemas.SignUp({
//         fullName: req.body.fullName,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         role: req.body.role
//     })
//     const emailToken = jwt.sign({
//         username: req.body.username
//     }, 'secret1234', { expiresIn: '1h' })
//     emails.verifyUserEmail(req.body.fullName, req.body.email, req.body.username, emailToken)
//     signedUpUser.save()
//         .then(data => {
//             res.json(data)
//         })
//         .catch(error => {
//             res.json(error)
//         })
// })