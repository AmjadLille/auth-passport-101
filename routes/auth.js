const express = require("express");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../conf");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.post("/signup", async (req, res) => {
    try {
        const formData = req.body;
        formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
        const [sqlRes] = await db.query(`INSERT INTO user SET ?`, formData);
        delete formData.password;
        formData.id = sqlRes.insertId;
        const token = jwt.sign(formData, jwt_secret);
        res.status(201).json(token);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
})

router.post("/login", (req, res) => {
    const msg =
        "Here, we must see if our user already exists";
    res.status(200).send(msg);
})


module.exports = router;
