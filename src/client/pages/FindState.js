import React from 'react';
import Container from 'react-bootstrap/Container';
// import Search from '../components/Search';
import GraphView from '../components/GraphView';

const styles = { 
  marginTop: "30px",
  alignItems: 'flex-end'
}

const FindState = () => {
  return (
    <Container style={styles}>
      {/* <Search /> */}
      <GraphView/>
    </Container>
  );
}

export default FindState;