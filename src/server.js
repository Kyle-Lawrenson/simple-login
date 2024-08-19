require ("dotenv").config();
const express = require ("express");
const app = express();

const port = 5002;
// const port = process.env.PORT || 5001;

app.get("/health", (req, res) => {
    res.status(200).json({
        msg: "API is healthy",
    })
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));