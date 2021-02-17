import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const accordStyle = { 
    backgroundColor: '#97294E',
    color: 'white'
}

class Conditions extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
            socialMedia: '', 
            policy: '',
            covid: ''
        };
    }

    submit() { 
        this.setState({ 
            // if (this.state.socialMedia === '' || this.state.policy === '' || this.state.covid === '') { 

            // }
        })
    }
    render() { 
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" style={accordStyle}>
                    <b><i>Filters</i></b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}><b>Social Media</b></Form.Label>
                            <Col sm={5}>
                                <Form.Check
                                    type="radio"
                                    label="Facebook Interactions"
                                    name="formHorizontalRadios"
                                    id="fb"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Twitter Sentiment"
                                    name="formHorizontalRadios"
                                    id="twitter"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Reddit Sentiment"
                                    name="formHorizontalRadios"
                                    id="reddit"
                                    />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}><b>Policy</b></Form.Label>
                            <Col sm={5}>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Shelter in Place</option>
                                    <option>State of Emergency</option>
                                    <option>School Closures</option>
                                    <option>Mask Mandate</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={3}><b>COVID</b></Form.Label>
                            <Col sm={5}>
                                <Form.Check
                                type="radio"
                                label="Cases"
                                name="formHorizontalRadios"
                                id="cases"
                                />
                                <Form.Check
                                type="radio"
                                label="Deaths"
                                name="formHorizontalRadios"
                                id="deaths"
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                        <Button type="submit" style={{float:'right', margin: '10px'}} onClick={this.submit}>
                            Apply Changes
                        </Button>
                    </Form>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Conditions;