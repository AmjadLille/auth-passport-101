const express = require("express");
const bodyParser = require("body-parser");
const { backPort } = require("./conf");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* --------------------------------------------------------------------- Routes */

app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/misc"));

/* --------------------------------------------------------------------- 404 and server launch */
app.use((req, res) => {
    const msg = `Page not found: ${req.url}`;
    console.warn(msg);
    res.status(404).send(msg);
});

app.listen(backPort, () => {
    console.log(`API root available at: http://localhost:${backPort}/`);
});
