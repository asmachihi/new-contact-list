const jwt = require('jsonwebtoken')
const User = require('../Models/User')

exports.isAuth = async(req,res,next) =>{

    const token = req.headers["authorization"]

    try {
        if (!token){
            return res.status(400).sen({errors:[{msg:"You are not authorizated"}]})
        }
      const decoded = jwt.verify(token,process.env.secretKey)  
      const user = await User.findById(decoded.id)
      if (!user){
          return res.status(400).send({errors:[{msg:"You are not authorizated"}]})
      }
      req.user = user
      next()

    } catch (error) {
       res.status(500).send({errors:[{msg:"You are not authorizated"}]}) 
    }

}