const User = require ('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.signUp = async(req,res) =>{

    //on va utiliser req.body pour avoir un acces au données enregistrer 
   const {name,email,password} = req.body
    try {
        // on cherche l'existance dans mail dans la base de données
        const findUser = await User.findOne({email})

        //s'il exist on doit quitter
        if (findUser){
            return res.status(400).send({errors:[{msg:"user is already exist"}]})
        }

        // on va créer un nouvelle utilisateur
        const user = new User ({
            name,email,password
        })

        //on va crypté le mot de passe à l'aide du package 'bcrypt'
        const salt = 10
        const hash = await bcrypt.hash(password,salt)
        user.password = hash

        // on enregistre les nouveaux données
        await user.save()

        // on récupere l'id de payload
        const payload ={
            id : user._id 
        }
         // on crée le token avec la fonction prédefinie 'sign()'
        const token = jwt.sign(payload,process.env.secretKey,{expiresIn : "12h"})


        // on affiche le message OK et on attribut le nouvel utilisateur 'user' et on rajoute le 'token' afin de crypté le mp
        res.status(200).send({msg:"User register with success",user,token})



    } catch (error) {
        res.status(400).send({errors:[{msg:"impossible to sign Up"}]})
    }
}

exports.signIn = async(req,res) =>{

     // on doit récuperer le mail et le mot de passe de req body 
    const {email,password} = req.body

    try {

         // on va chercher l'existance du mail
     const user = await User.findOne({email})
        // test sur l'existance de l'utilisateur avec mail si non on retourne
     if (!user){
         return res.status(400).send({errors:[{msg:"user not found !"}]})
     }
     // on va comparer le mot de passe entrer avec le mot de passe enregistrer dans la base de données 
     const match = await bcrypt.compare(password,user.password)

     // test sur l'existance de l'utilisateur avec mot de passe si non on retourne
     if (!match){
         return res.status(400).send({errors:[{msg:"user not found !"}]})
     }
     
     // on recupere l'id générer automatiquement dans la base de données
     const payload ={
         id: user._id
     }
      
    const token = jwt.sign(payload,process.env.secretKey,{expiresIn :'12h'})
    res.status(200).send({msg: "user logged with success",user,token}) 
    } 
    catch (error) {
        res.status(400).send({errors:[{msg:"impossible to Sign In"}]})
    }
}