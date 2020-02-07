import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const BottomNav = ({ user }) => (
  <Navbar bg="primary" fixed="bottom" position="fixed" className="bottomNav">
    <div className="row">
      <Nav.Link className="link" href="#home"> Home</Nav.Link>
      <Nav.Link className="link" href="#start">Start</Nav.Link>
      <Nav.Link className="link" href="#user">User</Nav.Link>
      <Nav.Link className="link" href="#resources">Resources</Nav.Link>
    </div>
  </Navbar>
)

export default BottomNav
