//user module is imported here
const Users = require("../models/userModel")
//JSON Web Token is imported here...
const jwt = require('jsonwebtoken')
//call back function is working here
const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")
//If statement Invalid Authentication
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
//If statement Invalid Authentication
        if(!decoded) return res.status(400).json({msg: "Invalid Authentication."})
        const user = await Users.findOne({_id: decoded.id})
        
        req.user = user

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


module.exports = auth