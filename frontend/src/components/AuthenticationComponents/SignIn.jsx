import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Signin.css";
import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";
import SignUpWithMail from "./SignUpWithMail";

function SignInModal(props) {
  const [showGetStartInModal, setshowGetStartInModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleCloseModal = () => {
    setshowGetStartInModal(false);
    setShowEmailModal(false);
    props.onHide();
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="login-header d-flex justify-content-center align-items-center"
          >
            Welcome To Stories
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center mt-3">
          <div className="row">
            <div className="col-12">
              <div className="container-signIn-button">
                <i class="bi bi-envelope-fill"></i>
                <Link
                  onClick={() => setShowEmailModal(true)}
                  className="custom-button"
                >
                  Sign in with Mail
                </Link>
              </div>
            </div>
            <div className="create-account-container">
              <span>
                <p>
                  No Account?
                  <Link
                    onClick={() => setshowGetStartInModal(true)}
                    className="create-one-link"
                  >
                    Create One
                  </Link>
                </p>
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <GetStarted show={showGetStartInModal} onHide={handleCloseModal} />
      <SignUpWithMail show={showEmailModal} onHide={handleCloseModal} />
    </>
  );
}

export default SignInModal;
