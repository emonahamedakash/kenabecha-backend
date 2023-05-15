const userModel = require("../models/user.model.js");
const {verifyEmail} = require("./email.controller.js");
const { captcha } = require("./captcha.controller.js");



//New user Registration
const addUser = (req, res) => {

  try {
    const verifyCode = Math.floor(100000 + Math.random() * 900000);
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
      verifCode: verifyCode
    });
    newUser.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
        verifyEmail(req.body.name,req.body.email, verifyCode);
        console.log("new user created");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//Email verification
const mailVerify = async (req, res) =>{

  const mail = req.body.email;
  const vcode = req.body.verifyCode;


  //Finding that user in database
  const user = await userModel.findOne({ email: mail });
  
  //Verifying the mail.
  if (user) {
    if (user.verifCode == vcode) {
      const result = await userModel.findOneAndUpdate({ email: mail },{$set: {isVerified: true}});
      res.status(200).json({ success: true, message: result });
      
    } else {
      res.status(403).json({ success: false, message: "Incorrect Verification Code" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not Found" });
  }
}

//Getting all user
const allUser = async (req, res) => {
  const users = await userModel.find();
  res.status(200).send(users);
};
const deletUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOneAndDelete({ _id: id });
  res.status(200).send(user);
};

const login = async (req, res) => {
  const mail = req.query.email;
  const password = req.query.password;

  const { token, inputVal } = req.body;
  captcha(token, inputVal);
  const user = await userModel.findOne({ email: mail });
  if (user) {
    if (user.password === password) {
      res.status(200).json({ success: true, message: user });
    } else {
      res.status(403).json({ success: false, message: "Incorrect Password" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not Found" });
  }
};

module.exports = { addUser, allUser, deletUser, login, mailVerify };
