import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import './../styles.css';

const NavigationBar = () => {
  return (
    <Navbar variant="dark" style={{backgroundColor: '#97294E'}}>
        <Navbar.Brand href="/">COVID-19 Infodemic</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Item><Nav.Link><Link style={{color: '#FFF'}} to='/'>Home</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><Link style={{color: '#FFF'}} to='/findstate'>Find State</Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><Link style={{color: '#FFF'}} to='/aboutus'>About Us</Link></Nav.Link></Nav.Item>
            {/* <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/findstate'>Find State</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/aboutus'>About Us</Nav.Link></Nav.Item> */}
        </Nav>
    </Navbar>
  );
}

export default NavigationBar;