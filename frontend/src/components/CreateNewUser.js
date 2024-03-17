import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as API from "../utils/api";
import "./SignUpWithMail.css";

function CreateNewUser(props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setpassword] = useState("");
  const [date, setDate] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const emailParams = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    password: password,
    date: date,
  };

  const handleLoginCreate = (e) => {
    e.preventDefault();
    API.createUser(emailParams).then((response) => {
      console.log("response", emailParams);
      console.log("response header :", response.headers);
      setShowConfirmation(true);
    });
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value)
    console.log("email", email);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
    console.log("firstName", firstName);
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
    console.log("lastName", lastName);
  }

  const handlePassword = (event) => {
    setpassword(event.target.value)
    console.log("password", password);
  }

  const handleInputDate = (event) => {
    setDate(event.target.value)
    console.log("date", date);
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false); 
  };

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="signin-form"
    >      
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center mt-3">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter First Name" 
                value={firstName}
                onChange={handleFirstName} 
              />
              </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Last Name" 
                value={lastName}
                onChange={handleLastName} 
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={handleInputEmail} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={handlePassword} 
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control 
              type="date" 
              value={date}
              onChange={handleInputDate} 
            />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check 
              type="checkbox" 
              label="Check me out"
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            onClick={handleLoginCreate} 
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Body>
          <p>Check your email for confirmation.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default CreateNewUser;
