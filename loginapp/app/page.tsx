"use client";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import Button from "./Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/user/existing", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 200) {
        alert("Login successful!");
      } else if (response.status === 401) {
        alert("Login failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MDBContainer fluid className="p-3 my-5 container">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6" className={"mt-5"}>
            <h1 className={"text-center mb-4"}>Login</h1>
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              value={username}
              onChange={handleEmailChange}
              id="formControlLg"
              type="text"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              id="formControlLg"
              type="password"
              size="lg"
            />

            <MDBBtn className="mb-4 w-100" size="lg" onClick={handleLogin}>
              Login
            </MDBBtn>
             already have an account? <a href="/sign-up">Sign up</a>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default LoginForm;
