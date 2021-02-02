import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <React.Fragment>
        <Jumbotron>
            <center>
                <h1><b>Infodemic: Understanding COVID-19 <br></br>Public Sentiment Using <br></br>Social Media Data</b></h1>
                <p>This is a dashboard for users to interact with our data visualizations regarding COVID-19 cases in U.S states.</p>
                <Button variant="primary" href="/findstate">Learn more</Button>
            </center>
        </Jumbotron>
        <Container fluid>
            <Row>
                <Col >Info about COVID-19</Col>
                <Col >Links to helpful resources</Col>
                <Col >References</Col>
            </Row>
        </Container>
    </React.Fragment>
  );
}

export default Home;