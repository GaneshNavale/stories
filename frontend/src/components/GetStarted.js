import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Signin.css";
import SignUpWithMail from "./SignUpWithMail"
import SignIn from "./SignIn"
import { Link } from "react-router-dom";

function GetStarted(props) {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="signin-form"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="login-header d-flex justify-content-center align-items-center"
        >
          Join Stories
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center mt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="container-signIn-button">
              <i className="bi bi-google"></i>
              <button className="custom-button">Sign up with Google</button>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="container-signIn-button">
              <i className="bi bi-facebook"></i>
              <button className="custom-button">Sign up with Facebook</button>
            </div>
          </div>
          <div className="col-12">
            <div className="container-signIn-button">
              <i class="bi bi-envelope-fill"></i>
              <Link onClick={() => setShowEmailModal(true)} className="custom-button">Sign up with Mail</Link>
            </div>
          </div>
          <div className="create-account-container">
            <span>
              <p>Already have an account?
                <Link onClick={() => setShowSignInModal(true)} className="create-one-link">Sign in</Link>
              </p>
            </span>
          </div>
        </div>

      </Modal.Body>
      <SignIn show={showSignInModal} onHide={() => setShowSignInModal(false)} />
      <SignUpWithMail show={showEmailModal} onHide={() => setShowEmailModal(false)} />
    </Modal>
  );
}

export default GetStarted;
