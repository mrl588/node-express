const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {unauthenticatedError} = require('../errors')

const auth = async (req,res,next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new unauthenticatedError('Authentication Invalid')
    }
    const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        req.user={ userId:payload.userId, name:payload.name}
    }
    catch(error){
        throw new unauthenticatedError('Authentication Invalid')
    }
    next()
}
module.exports = auth