import React from 'react'
import './contactcard.css'
import contact from '../img/contact.jpg'
import { Modal ,Button ,Form} from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delete_person, edit_person } from '../../Redux/Actions/personActions'

const ContactCard=({personne})=> {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [person,setPerson] = useState({
      firstname:personne.firstname,
      name:personne.name,
      age:personne.age,
      email:personne.email
    })

    const handleChange=(e)=>{
      setPerson({...person,[e.target.name]:e.target.value})
    }
  
    return (
      
        <div className="container-fluid"> 
        <div className="card mx-auto col-md-3 col-10 mt-5">
             <img className="mx-auto img-thumbnail" src={contact} width="50%" height="70%" />
          <div className="card-body text-center mx-auto">
            <div className="cvp">
              <h5 className="card-title font-weight-bold">Vos informations:</h5>
              <p className="card-text">{personne.firstname}</p> 
              <p className="card-text">{personne.name}</p> 
              <p className="card-text">{personne.age}</p> 
              <p className="card-text">{personne.email}</p> 
            </div>
            <br/>
             <Button variant="primary" onClick={handleShow}>
                Modifier
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier vos informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="firstname" onChange={handleChange} defaultValue={person.firstname}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange}  defaultValue={person.name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" onChange={handleChange}  defaultValue={person.age}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" onChange={handleChange}  defaultValue={person.email}/>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button variant="primary" onClick={()=>dispatch(edit_person(personne._id,person))}>
                    Enregistrer
                </Button>
                </Modal.Footer>
            </Modal> 
            <Button variant="primary" onClick={()=>dispatch(delete_person(personne._id))}>
                Supprimer
            </Button>
          </div>
          
        </div>
      </div>
     
    )
}

export default ContactCard