import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Carousel from 'react-bootstrap/Carousel';

const graphStyle1 = { 
    height: '400px', 
}

const graphStyle2 = { 
    height: '300px', 
}

const GraphTabs = (props) => {
    const { state } = props; 
    const stateName = state.name; 

    // console.log(imgName);
    // console.log(require('../../images/AZ/' + stateName + '.png').default);
    // const survey1 = require('../../images/' + stateName + '/cov_news1.png').default;
    // const survey2 = require('../../images/' + stateName + '/cov_news1.png').default;
    // const survey3 = require('../../images/' + stateName + '/cov_stop_4.png').default;
    // const survey4 = require('../../images/' + stateName + '/inst_trust1_2.png').default;
    // const survey5 = require('../../images/' + stateName + '/inst_trust1_5.png').default;

    const surveys = [require('../../images/' + stateName + '/cov_news1.png').default, require('../../images/' + stateName + '/cov_news1.png').default, require('../../images/' + stateName + '/cov_stop_4.png').default, require('../../images/' + stateName + '/inst_trust1_2.png').default, require('../../images/' + stateName + '/inst_trust1_5.png').default ]; 

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
      <React.Fragment>
          <h1>{state.name}</h1>
          <Tabs defaultActiveKey="survey">
              <Tab eventKey="all" title="All">
                  <Carousel activeIndex={index} onSelect={handleSelect} touch={true}> 
                    { 
                        surveys.map( survey => { 
                            return ( 
                                <Carousel.Item> 
                                    <img className="d-block w-100" src={survey} alt='graph'/>
                                </Carousel.Item>
                            )
                        })
                    }
                  </Carousel>
              </Tab>

              <Tab eventKey="survey" title="Survey">
                  <center><br></br><h4>In the last 24 hours, did you get any news or information related to the 
                      current coronavirus (COVID-19) outbreak from the following sources?</h4>
                      <img style={graphStyle1} src={surveys[0]} alt='graph'/><img style={graphStyle1} src={surveys[1]} alt='graph'/><h4>How do you feel about shutting down K-12 schools to prevent the spread of COVID-19?</h4><img style={graphStyle2} src={surveys[2]} alt='graph'/><h4>How much do you trust your state government to effectively handle COVID-19?</h4><img style={graphStyle2} src={surveys[3]} alt='graph'/><h4>How much do you trust Donald Trump to do the right thing to best handle the current COVID-19 outbreak?</h4><img style={graphStyle2} src={surveys[4]} alt='graph'/></center> 
              </Tab>

              <Tab eventKey="timeline" title="COVID-19 Timeline"><p>hello</p></Tab>
            </Tabs>
      </React.Fragment>
    
  );
}

export default GraphTabs;