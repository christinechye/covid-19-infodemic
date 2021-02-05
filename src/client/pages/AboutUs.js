import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import '../styles.css';

const styles = { 
  marginTop: "30px"
}

const AboutUs = () => {
  return (
    <Container style={styles}> 
      <Row className="justify-content-md-center">
        <Col md="auto"><b>Research Statement</b></Col>
    </Row>
    <br></br>
      <p>With the outbreak of the COVID-19 pandemic, an overabundance of information related to the virus 
        was released through social media, putting the world in two pandemics––COVID-19 and an “infodemic”. 
        As the situation worsened in the United States, people began relying more heavily on the advice 
        publicized by their state and national leaders.</p>
        <p>Given that individual states have the authority to decide which health guidelines to mandate 
          in their states, there are inconsistencies between public health recommendations and individual 
          state orders, which may lead to the public being confused on the best guidelines to follow. 
          Also, with so much information being spread on social media, there has been a divide in the US 
          on how to respond to this pandemic. Analyzing the public’s response to such information online 
          is helpful in better understanding the pandemic in the US. </p>
          <p>Our proposed solution is to research the virality of COVID-19 information and misinformation
           on social media and analyze whether it is correlated with the spread of COVID-19 at the state 
           and national level in the US. We will create an interactive user interface to display our results 
           to inform the public.
           We will be combining data from several sources: 
          </p>
           <ol>
             <li> Social media data using the CrowdTangle API from Facebook </li>
              <li> COVID-19 confirmed case and death counts on a state-by-state and national level; </li>
              <li> Data gathered by researchers in The COVID States Project aimed at analyzing 
                state-by-state COVID-19 variables, such as trust in institutions, belief in COVID-19 
                misinformation, and more. </li>
            </ol>
            <p>
            We will align the data on a unified timeline with social media posts from key dates during 
            the pandemic from governors and national 
           officials, and we will perform sentiment analysis on the posts' comments using common natural 
           language processing libraries in order to understand people’s reactions, trust, and concern levels
            regarding the posts' contents. We will then perform statistical analyses on these data to 
            determine if there is any correlation amongst these various factors, and we plan to create an 
            interactive and informative dashboard with the results that will allow users to select different 
            factors to see visualizations of this data on a state-by-state basis. 
            With this work, we aim to analyze how society is impacted on a state and national level by 
            viral information and misinformation online, and how the propagation of such information may 
            have positive or negative effects on real world events such as the COVID-19 pandemic.
          </p>
    </Container>
  );
}

export default AboutUs;