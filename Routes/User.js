const express = require ('express')
const { signUp, signIn } = require('../Controllers/User')
const { isAuth } = require('../Middelwares/isAuth')
const { Validator, registerRules, loginRules } = require('../Middelwares/Validator')
const router = express.Router()


//appel de la fonction signUp
router.post('/signUp',registerRules,Validator,signUp)

//appel de la fonction signIn
router.post('/signIn',loginRules,Validator,signIn)

//verifier l'authentification de l'utilisateur
router.get('/current',isAuth,(req,res)=>res.send({user:req.user}))

module.exports = router