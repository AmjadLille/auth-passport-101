const express = require("express");
const router = express.Router();
const { db } = require("../conf");


router.get("/", (req, res) => {
    const msg =
        "Welcome on Authentication-101! Feel free to read the README.md file";
    res.status(200).send(msg);
});

router.get("/testDB", async (req, res) => {
    try {
        const [sqlRes] = await db.execute(`SELECT * FROM user`);
        res.status(200).json(sqlRes);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/protected", (req, res) => {
    const msg =
        "If you can see this, you should be logged in !";
    res.status(200).send(msg);
})

module.exports = router;
