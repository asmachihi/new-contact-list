import React from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_person } from '../../Redux/Actions/personActions';

const EditPerson=()=> {
    
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 const dispatch = useDispatch()

  const [person,setPerson] = useState({
      firstname:"",
      name:"",
      age:"",
      email:""
  })

  const handleChange=(e)=>{
      setPerson({...person,[e.target.name]:e.target.value})
  }
  return (
    <>
      
      <Button variant="primary" onClick={handleShow}>
                Ajouter un nouveau contact
            </Button>
  
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modifier vos informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="firstname" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" name="name" onChange={handleChange}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name="age" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" onChange={handleChange} />
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
                <Button variant="primary" onClick={()=>dispatch(add_person(person))}>
                    Enregistrer
                </Button>
                </Modal.Footer>
            </Modal> 
    </>
  );
}

export default EditPerson