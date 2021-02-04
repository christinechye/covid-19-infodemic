import React from 'react';
import Container from 'react-bootstrap/Container';
// import '../styles.css';

const styles = { 
  marginTop: "30px"
}

const AboutUs = () => {
  return (
    <Container style={styles}> 
      <p>With the outbreak of the COVID-19 pandemic, an overabundance of information related to the virus was released through social media, putting the world in two pandemics––COVID-19 and an “infodemic”. As the situation worsened in the United States, people began relying more heavily on the advice publicized by their state and national leaders.</p><br></br><p>Given that individual states have the authority to decide which health guidelines to mandate in their states, there are inconsistencies between public health recommendations and individual state orders, which may lead to the public being confused on the best guidelines to follow. Also, with so much information being spread on social media, there has been a divide in the US on how to respond to this pandemic. Analyzing the public’s response to such information online is helpful in better understanding the pandemic in the US.</p>
    </Container>
  );
}

export default AboutUs;