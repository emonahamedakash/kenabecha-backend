const router = require("express").Router();
const {
  addUser,
  allUser,
  deletUser,
  login,
  mailVerify,
} = require("../controllers/user.controller.js");

router.post("/user", addUser);
router.post("/mailverify", mailVerify);
router.get("/user", allUser);
router.post("/user/:id", deletUser);
router.post("/login", login);

module.exports = router;
