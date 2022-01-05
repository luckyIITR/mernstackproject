const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See of user exists
    // GEt users gravatar
    // Encrypt password
    // return jsonwebtoken

    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;
