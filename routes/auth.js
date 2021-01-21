const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    const msg =
        "Here, we must work on user registration";
    res.status(200).send(msg);
})
router.post("/login", (req, res) => {
    const msg =
        "Here, we must see if our user already exists";
    res.status(200).send(msg);
})


module.exports = router;
