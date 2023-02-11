import React, { useState } from "react";
import { Tabs, Tab, Container, TabContainer } from "react-bootstrap/";
import Login from "./Login";
import Register from "../Register/Register";
import "./LoginTab.css";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container className="login-bg" fluid>
      <center>
        <img style={{height:`70px`, width:`100`,}} className="logo-header-main" src="logo.svg" />
        </center>
       
        <br />

  
        <Container className="auth-inner" fluid>
          <Tab.Container defaultActiveKey="login">
            <Tabs
              defaultActiveKey="login"
              className="mb-3"
              variant="pills"
              justify
            >
              <Tab eventKey="login" title="Login">
                <Login />
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </Tab.Container>
        </Container>
        <Container className="login-footer">
          <br />

          <hr style={{ color: `white` }} />
          <br />
          <footer>
           
            <br />
            <br />

            <Container>
              <h1
                style={{
                 
                  color: `hsla(248, 25%, 88%, 0.795)`,
                  fontSize: `14px`,
                }}
              >
                <center>
                  <img style={{height:`40px`, width:`500`,}} className="logo-header-main" src="logo.svg" />
                  </center>
                Copyright 2023 © SLS Technologies. All rights reserved.
              </h1>
            </Container>
          </footer>
        </Container>
      </Container>
    </>
  );
}

export default LogModal;
