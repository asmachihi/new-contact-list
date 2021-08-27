const express = require('express')
const serveur = express()
const connectDB = require('./Config/connectDB.js')
const personRouter = require('./Routes/Person.js')
const userRouter = require('./Routes/User')


//appel au json pour qu'on puisse lire la syntaxe JSON
serveur.use(express.json())

//appel au router person où se trouve toutes les actions 
serveur.use('/api/person',personRouter)

//appel au router user 
serveur.use('/api/user',userRouter)

//appel pour la connexion de la base de données
connectDB()

//création du serveur au port 5000
const PORT = 5000
serveur.listen(PORT,()=> console.log(`Serveur connected at port ${PORT}`))