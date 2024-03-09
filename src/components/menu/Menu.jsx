import React from 'react'
import logo from "../../assets/logo.png"
import {Container,Navbar,Nav } from 'react-bootstrap'
import { MdKeyboardArrowDown } from "react-icons/md";
import "./menu.css"


const Menu = () => {
  return (
    <div className="manu_main">
         <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Product <MdKeyboardArrowDown /></Nav.Link>
            <Nav.Link href="#link">Template <MdKeyboardArrowDown /></Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
          <div className="login_btn">
            <a href="#">Sign In</a>
            <a href="#">Start Free</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu