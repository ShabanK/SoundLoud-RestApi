const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("you are here login");
});

//login route
router.get("/login", (req, res) => {
  res.send("IM HERE NOW!!!");
});

// sign up route
router.get("/signup", (req, res) => {
  res.send("IM DOING THE BEST I CANNN");
});

// auth with google
router.get("/google", passport.authenticate("google"));

//sign out
router.get("/logout", (req, res) => {
  res.send("ARE YOU NOW??!?!?!?!??!?!");
});

module.exports = router;
