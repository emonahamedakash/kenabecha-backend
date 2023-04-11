const router = require("express").Router();
const {
  addUser,
  allUser,
  singleUser,
  login,
} = require("../controllers/user.controller.js");

router.post("/user", addUser);
router.get("/user", allUser);
router.get("/user/:id", singleUser);
router.get("/login", login);

module.exports = router;
