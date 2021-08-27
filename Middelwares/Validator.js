const { body , validationResult } = require ('express-validator')

exports.registerRules = [
    //le champs nom ne doit pas etre vide
    body ('name',"name required").notEmpty(),
    // il faut respecter la syntaxe du mail
    body ('email',"invalid e-mail").isEmail(),
    // le mot de passe doit avoir au moins 6 characteres
    body ('password',"password must be at least 6 characters").isLength({min:6})
]

exports.loginRules = [
   
    // il faut respecter la syntaxe du mail
    body ('email',"incorrect information").isEmail(),
    // le mot de passe doit avoir au moins 6 characteres
    body ('password',"incorrect information").isLength({min:6})
]

exports.Validator = (req,res,next) =>{
    const result = validationResult (req)
    if (!result.isEmpty()){
        return res.status(400).send({errors:result.array()})
    }
    next()
}