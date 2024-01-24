import React from "react";
import { Button, Modal } from "react-bootstrap";

function SignInModal(props) {
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
          className="login-header"
        >
          Welcome To Stories
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              I am Not Robot
            </label>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignInModal;
