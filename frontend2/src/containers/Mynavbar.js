import React from 'react'
import {Navbar,NavDropdown,Form,FormControl,Button,Nav} from 'react-bootstrap'

const Mynavbar = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">스케줄러</Nav.Link>
        <NavDropdown title="회원관리" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">로그인</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">정보수정</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">회원탈퇴</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Mynavbar