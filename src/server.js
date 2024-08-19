require ("dotenv").config();
const express = require ("express");
const SQLconnection = require("./db/connection");
const app = express();

const port = process.env.PORT || 5002;

app.get("/health", (req, res) => {
    res.status(200).json({
        msg: "API is healthy",
    })
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));