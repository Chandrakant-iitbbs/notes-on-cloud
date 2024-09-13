const jwt = require('jsonwebtoken');
const JWT_secret = "CK@K@nt";

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header("auth-header");     // get token from header
    if (!token) {
        res.status(400).send({ error: "Enter the token" });
    }
    try {
        const data = jwt.verify(token, JWT_secret);   // verify token
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchUser;