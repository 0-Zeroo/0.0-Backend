const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, 0.0 Server</h1>");
});

app.listen(8080, () => {
    console.log("0.0 sever = localhost:8080");
});
