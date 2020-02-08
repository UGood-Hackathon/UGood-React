import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Icon from '@mdi/react'
import { mdiHome, mdiCheckBold, mdiAccount, mdiBookOpenVariant } from '@mdi/js'

const BottomNav = ({ user }) => (
  <Navbar bg="primary" fixed="bottom" position="fixed" className="bottomNav">
    <div className="row">
      <Nav.Link className="link" href="#home">
        <Icon path={mdiHome} title="Home" size={2}
          color="#ff6464"/><br/>
        Home
      </Nav.Link>
      <Nav.Link className="link" href="#start">
        <Icon path={mdiCheckBold} title="Start" size={2}
          color="#ff6464"/><br/>
        Start
      </Nav.Link>
      <Nav.Link className="link" href="#user">
        <Icon path={mdiAccount} title="User" size={2}
          color="#ff6464"/><br/>
        User
      </Nav.Link>
      <Nav.Link className="link" href="#resources">
        <Icon path={mdiBookOpenVariant} title="Resources" size={2}
          color="#ff6464"/><br/>
        Resources
      </Nav.Link>
    </div>
  </Navbar>
)

export default BottomNav
