const userModel = require("../models/user.model.js");

const addUser = (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    });
    newUser.save((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const allUser = async (req, res) => {
  const users = await userModel.find();
  res.status(200).send(users);
};
const singleUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOne({ id: id });
  res.status(200).send(user);
};

const login = async (req, res) => {
  const mail = req.query.email;
  const password = req.query.password;

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

module.exports = { addUser, allUser, singleUser, login };