import React from 'react'
import { Modal,Button,InputGroup,Form } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './profile.css';


function Profile({username,phoenumber,skills}) {
    const navigate = useNavigate()
    const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    navigate('/')
};
  const handleShow = () => setShow(true);
  return (
    
    <Modal show={show} onHide={handleClose}>
      
    <Modal.Header  closeButton>
      <Modal.Title style={{color:`#2BAE66`}}>User Information</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      
        <center> <Avatar style={{ width: 140, height: 140,backgroundColor:`green` }}/></center>
        <br />
        
        <br />
   
            
        <InputGroup className="mb-3">
            
        <InputGroup.Text   id="basic-addon1"></InputGroup.Text>
        <Form.Control
          
          value={username}
          disabled
        />
      </InputGroup>
      <InputGroup className="mb-3">
            
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              
              value={phoenumber}
              disabled
            />
 </InputGroup>
      <InputGroup className="mb-4">
            
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              
              value={skills}
              disabled
            />

          </InputGroup>
      </Modal.Body>
    <Modal.Footer>
      <Button 
      style={{color:`#2BAE66`}}
      variant="white" onClick={handleClose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>
  )
}

export default Profile
