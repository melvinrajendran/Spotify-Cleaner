import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Loader.css";

const PUBLIC_URL = process.env.PUBLIC_URL;

const Loader = (props) => {
  return <Container fluid className={`${props.fullScreen ? "loader-full-screen" : ""} text-center d-flex align-items-center justify-content-center`}>
    <Row>
      <Col>
        <img className="rotating" src={PUBLIC_URL + "/spotify-large.png"} alt="Spotify logo" width="128" height="128" />
      </Col>
    </Row>
  </Container>;
};

export default Loader;