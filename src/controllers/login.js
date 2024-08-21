const jwt = require("jsonwebtoken")

async function login(req, res) {

try {
    const experationTime = 1000 * 60 * 60 * 24 * 7;
    const options = {
        expiresIn: experationTime
    }
    const payload = {
        email: req.body.email,
        username: req.body.username
    }
    const privateKey = process.env.JWT_KEY
    const token = jwt.sign(payload,privateKey,options);
    console.log(token);
    res.status(200).json({
        message:"JWT token created",
        token:token,
        email: req.body.email
    })
} catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Login error",
        errorMessage: error
    })
}
}

module.exports = login