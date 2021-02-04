import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const GraphTabs = (props) => {
    const { state } = props; 
  return (
      <React.Fragment>
          <h1>{state.name}</h1>
          <Tabs defaultActiveKey="survey">
              <Tab eventKey="all" title="All"><p>hello</p></Tab>
              <Tab eventKey="survey" title="Survey">
                  <center><h4>In the last 24 hours, did you get any news or information related to the current coronavirus (COVID-19) outbreak from the following sources?</h4></center>
              </Tab>
              <Tab eventKey="timeline" title="COVID-19 Timeline"><p>hello</p></Tab>
            </Tabs>
      </React.Fragment>
    
  );
}

export default GraphTabs;