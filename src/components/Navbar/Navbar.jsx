import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
  Offcanvas,
} from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import LogoutTwoToneIcon from "@mui/icons-material/Logout";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const NavbarHeader = (props) => {
  const user = props.username;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "./";
  };

  useEffect(() => {});
  return (
    <div>
      <Navbar
        expand="sm"
        className="fixed-top mb-1 "
        style={{
          backgroundColor:`#2BAE66`,
          zIndex: `1040`,
          boxShadow: `0 2px 100px rgba(0,0,0,.25)`,
        }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img style={{height:`50px`, width:`100`,}} className="logo-header-main" src="logo.svg" />
            </Navbar.Brand>   
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Navbar.Offcanvas placement="end">
              <Offcanvas.Header closeButton>
                <LinkContainer to="/">
                  <Offcanvas.Title>
                    <img className=
                    "logo-header-main" src="logo-color.png" />
                  </Offcanvas.Title>
                </LinkContainer>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                
              <Nav.Link href="#action1">About</Nav.Link>

                <Nav className="me-auto">
                <LinkContainer to='/users'>
                  <Nav.Link >
                    Profiles
                  </Nav.Link>
                  </LinkContainer>
                </Nav>
                <Nav>
                  <br />
                  <LinkContainer to='/profile'>
                  <Nav.Link >
                    <AccountCircleTwoToneIcon />
                    {user}
                  </Nav.Link>
                  </LinkContainer>

                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Signed in as @{user}</Tooltip>}
                  >

                    <Nav.Link onClick={handleLogout}>
                      <LogoutTwoToneIcon />
                      Signout
                    </Nav.Link>
                  </OverlayTrigger>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
