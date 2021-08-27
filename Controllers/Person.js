const Person = require ('../Models/Person')


//Add new Person
//method POST
//req.body
exports.addPerson =async(req,res) =>{

    const {firstname,name,age,email} = req.body

    try {
        //verification de l'existance de l'adress e-mail
        const person = await Person.findOne({email})

        // test sur l'adresse e-mail si elle existe on affiche un message d'erreur
        if (person){
           return res.status(400).send({msg:"Person is already exist"})
        }

        // création d'un nouveau personne à l'aide de "new" 
        const newPerson = await new Person({
            firstname,name,age,email
        })

        // enregistrement de l'ajout
        await newPerson.save()
        
        //revoie du resultat OK avec code 200
        res.status(200).send({msg:"Person added with succes",newPerson})
        
    } catch (error) {
        res.status(400).send({msg:"Impossible toadd a new Person",error})
    }
}


//Get all persons
//mehod GET

exports.getPersons= async(req,res)=>{
    try {
        //recherche de la liste complete de tous les personnes avec 'find'
        const persons = await Person.find()

        //affichage d'un message OK
        res.status(200).send({msg:"List of all persons",persons})
        
    } catch (error) {
        res.status(400).send({msg:"impossible to get persons"})
    }
}

// Delete person
// methode DELETE
// req.params

exports.deletePerson = async(req,res)=>{
    //on recupere l'id de la personne a supprimer de req.params
     const {ID} = req.params 
    try {
         
        // on lance la recherche de la personne par id et on le supprime
        const deleteperson = await Person.findByIdAndDelete({_id:ID})

        // on envoi un message OK
        res.status(200).send({msg:"person deleted",deleteperson}) 
        
    } catch (error) {
        res.status(400).send({msg:"impossible to delete this person"})
    }
}


//Get one person
//method GET
//req.params
exports.getPerson=async(req,res)=>{
    //on recupere l'id de req.params
    const {ID} = req.params
    try {

        //on lance da recherche d'une personne avec une précision de l'id
        const person = await Person.findById({_id:ID})

        // on envoi la reponse OK
        res.status(200).send({msg:"person selected",person})

        
    } catch (error) {
       res.status(400).send({msg:"impossible to get this person"})
    }
}

//Update person
//Method PUT
// req.body & req.params

exports.updatePerson = async(req,res) =>{
   const {ID} = req.params
   
    try {
        // on utilise l'id de la personne à modifier on suite on garde les anciens element à l'aide de $set:{...req.body}
     const updateperson = await Person.findByIdAndUpdate(ID,{$set:{...req.body}})

     //on affiche un resultat OK
     res.status(200).send({msg:"person updated",updateperson})
    } catch (error) {
      res.status(400).send({msg:"impossible to update this person"})    
    }
}