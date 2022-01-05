const express = require('express');
const router = express.Router();

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.post('/', (req, res) => {
    console.log(req.body);
    res.send("User route")
});

module.exports = router;