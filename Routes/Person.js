const express = require ('express')
const { addPerson, getPersons, deletePerson, getPerson, updatePerson } = require('../Controllers/Person')
const router = express.Router()



//appel a la fonction addPerson
router.post('/',addPerson)

//appel de la fonction getPerson
router.get('/',getPersons)

//appel de la fonction deletePerson
router.delete('/:ID',deletePerson)

//appel de la fonction getPerson
router.get('/:ID',getPerson)

//appel de la fonction updatePerson
router.put('/:ID',updatePerson)

module.exports = router