const Schemas = require("../../models");
const passport = require("passport");
const router = require("express").Router();
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/event/111111" }),
  async function (req, res) {
    // Successful authentication, redirect home.
    //save in data base if new user
    //ckeck if user already exixts
    const profile = req.user._json;
    let email;
    const dbUser = await Schemas.User.findOne({ email: profile.email });
    if (!dbUser) {
      const newUser = new Schemas.User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        points: "0",
      });
      await newUser.save();
      email = profile.email;
    } else {
      email = dbUser.email;
    }

    res.redirect(`http://localhost:3000/home/${email}`);
  }
);

module.exports = router;
