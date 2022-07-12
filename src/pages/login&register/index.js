import React from "react";
import Header from "../../components/header";
import Button from "../../components/button";
import Modal from "../../components/modal";

function Login(props) {
  return (
    <div>
      <Header/>
      <div>
        <form className="login">
          <div className="logo"></div>
          <h1>Log in to Twitter</h1>
          <input
            type="email"
            placeholder="Phone number, email address"
            id="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <Button text="Log in" />
          <div className="login-options">
            <p>Forgot password?</p>
            <p>Sign to Twitter</p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Register(props) {
  return (
    <div>
      <Header />
      <Modal show={props.show}>Register</Modal>
    </div>
  );
}

export { Login, Register };
