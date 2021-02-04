import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import Image from 'react-bootstrap/Image';
import logo from '../../images/AZ/AZ_cov_news1.png';

const graphStyle = { 
    height: '400px', 
}

const GraphTabs = (props) => {
    const { state } = props; 
    const Arizona = [ require('../../images/AZ/AZ_cov_news1.png'), 
    require('../../images/AZ/AZ_cov_news2.png'), require('../../images/AZ/AZ_cov_stop_4.png'), 
    require('../../images/AZ/AZ_inst_trust1_2.png'), require('../../images/AZ/AZ_inst_trust1_5.png')];
  
    // let languages = {
    //     news1:  require('../../images/AZ/AZ_cov_news1.png'),
    //     news2: require('../../images/AZ/AZ_cov_news2.png'),
    // }

    // const  imageMap= { Arizona: [require('../../images/AZ/AZ_cov_news1.png'), require('../../images/AZ/AZ_cov_news2.png'), require('../../images/AZ/AZ_cov_stop_4.png'), require('../../images/AZ/AZ_inst_trust1_2.png'), require('../../images/AZ/AZ_inst_trust1_5.png')]};
    const stateName = state.name; 
  return (
      <React.Fragment>
          <h1>{state.name}</h1>
          <Tabs defaultActiveKey="survey">
              <Tab eventKey="all" title="All"><p>hello</p></Tab>
              <Tab eventKey="survey" title="Survey">
                  <center><h4>In the last 24 hours, did you get any news or information related to the 
                      current coronavirus (COVID-19) outbreak from the following sources?</h4>
                      <img style={graphStyle} src={logo}/></center>
                      
              </Tab>
              <Tab eventKey="timeline" title="COVID-19 Timeline"><p>hello</p></Tab>
            </Tabs>
      </React.Fragment>
    
  );
}

export default GraphTabs;