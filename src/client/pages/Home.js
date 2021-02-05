import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
        <Jumbotron>
            <center>
                <h1><b>Infodemic: Understanding COVID-19 <br></br>Public Sentiment Using <br></br>Social Media Data</b></h1>
                <p>This is a dashboard for users to interact with our data visualizations regarding COVID-19 cases in U.S states.</p>
                <Button variant="primary"><Link style={{color: '#FFF'}} to='/findstate'>Learn More</Link></Button>
            </center>
        </Jumbotron>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">Info about COVID-19</Col>
                <Col md="auto">Links to helpful resources</Col>
                <Col md="auto">References</Col>
            </Row>
        </Container>
    </React.Fragment>
  );
}

export default Home;