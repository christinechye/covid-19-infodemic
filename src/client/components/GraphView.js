import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import GraphTabs from './GraphTabs';

const states = ['Arizona', 'California', 'Florida', 'Iowa', 'Michigan', 'Nevada', 'New York', 'Ohio', 'Pennsylvania', 'Texas', 'Washington', 'Wisconsin'];

const GraphView = () => {
  return (
    <Tab.Container defaultActiveKey={states[0]}>
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    { 
                        states.map(state => { 
                            return ( 
                                <Nav.Item><Nav.Link eventKey={state}>{state}</Nav.Link></Nav.Item>
                            )
                        })
                    }
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    { 
                        states.map(state => { 
                            return ( 
                                <Tab.Pane eventKey={state}><GraphTabs state={{name: state}}/></Tab.Pane>
                            )
                        })
                    }
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
  );
}

export default GraphView;