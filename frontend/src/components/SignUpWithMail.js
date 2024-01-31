import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import * as API from "../utils/api";
import "./SignUpWithMail.css";
import SignIn from "./SignIn"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUpWithMail(props) {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignInData } = props;

  const handleLoginCreate = (e) => {
    e.preventDefault();

    const emailParams = {
      email: email,
      password: password,
    };

    API.login(emailParams).then((response) => {
      const storiesAuthToken = response.headers.authorization;
      localStorage.setItem("StoriesAuthorizationToken", storiesAuthToken);

      console.log("response", response);
      console.log("storiesAuthToken", storiesAuthToken);
      console.log("This is Response Header", response.data);
      if (storiesAuthToken) {
        console.log("Token is stored in local storage:", storiesAuthToken);
        handleSignInData(response.data);
      } else {
        console.log("Token is not present in local storage");
      }
    });
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
    console.log("email", email);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
    console.log("password", password);
  };
  

  return (
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
        <div className="container-SignUpWithMail">
          <div className="SignUpWithMail-header">Sign in with email</div>
          <div className="SignUpWithMail-text">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</div>
          <div className="SignUpWithMail-small-text">Your email</div>
          <Form.Group controlId="formEmail" className="email-input">
            <Form.Control 
              type="email" value={email}
              onChange={handleInputEmail} 
            />            
          </Form.Group>
          
          <div className="SignUpWithMail-small-text">Your Password</div>
          <Form.Group controlId="formEmail" className="email-input">
            <Form.Control
              type="password" value={password}
              onChange={handleInputPassword}
            />
          </Form.Group>
          
          <button className="email-continue-button" onClick={ handleLoginCreate }>Continue</button>
          <div className="create-account-container">
            <span>
              <p>All Signin options
                <Link onClick={() => setShowSignInModal(true)} className="create-one-link">All sign in options</Link>
              </p>
            </span>
          </div>
        </div>

      </Modal.Body>
      <SignIn show={showSignInModal} onHide={() => setShowSignInModal(false)} />
    </Modal>
  );
}

export default SignUpWithMail;
