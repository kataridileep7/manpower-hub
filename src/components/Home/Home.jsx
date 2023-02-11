import NavbarHeader from "../Navbar/Navbar";
import { Container, Row, Col, Card, Nav,Table } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { color } from "@mui/system";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import { blueGrey } from "@mui/material/colors";


const home = {
  bg: {
  
    padding: "12vh 0",
  },
};
function Home(props) {

  return (
    <div style= {{backgroundColor:`#FCF6F5`}}>
      
      <NavbarHeader username={props.username} />
     

      <div style={home.svg}>
        <Container className="home-deco">
        <img style={{height:`50px`, width:`100`,}} className="logo-header-main" src="" />
          <div className="title-deco ,
          <image=5665519.jpg">
            <br />
            <br />
           
          <h1 className="heading" style={{color:`#2BAE66`}}>Man Power Hub</h1>
            <hr style={{ backgroundColor: `#2BAE66`, borderColor: `black` }} />
            <div>
              <h2 className="title"style={{color:`#2BAE66`}}>

create a workers profiles  ,sahare posts and get help from other workers                  
               
              </h2>
            </div>
            
          </div>
        </Container>
      </div>
      <Container>
     
      </Container>
      <div className="stud-footer">
        <Container>
          <Row>
            <Col sm>
              <div>
                
                <h1 style={{ color: `#2BAE66`, fontSize: `16px` }}>
                  Man Power Hub
                </h1>
                <div style={{ color: `#2BAE66`, listStyle: `none` }}>
            <li>selct the workers  </li>
            <li>give the ratings</li>
            <li>all types of workers are avaliable</li>
            </div>
              </div>
            </Col>
            <Col sm>
              <h4>Features</h4>
              <div style={{ color: `#2BAE66`, listStyle: `none` }}>
                <li>Job </li>
                <li>Employees </li>
                <li>Internships </li>
              </div>
            </Col>
            <Col sm>
              <h4>Contact</h4>
              <div
                style={{ fontSize: `px`, color: `#2BAE66`, listStyle: `none` }}
              >
                <li>
                  <CallTwoToneIcon />
                  +91 7022193478
                </li>
                <li>
                  <EmailTwoToneIcon />
                  kataridileep@gmail.com
                </li>
                <li>
                  <LocationOnTwoToneIcon />
                  Bangalore, Karnataka, India{" "}
                </li>
              </div>
            </Col>
            <Col>
              <Nav>
                
              
              </Nav>
              <img src="footer-security.svg" style={{ height: `16vh` }} />
            </Col>
          </Row>
        </Container>

        <hr />
        <Container>
          <h1 style={{ color: `#2BAE66`, fontSize: `14px` }}>
            Copyright 2023 © SLS Technologies. All rights reserved.
          </h1>
        </Container>
      </div>
    </div>
  );
}

export default Home;
