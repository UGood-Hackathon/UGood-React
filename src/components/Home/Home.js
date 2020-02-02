import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

const Home = ({ user }) => (
  <Fragment>
    <Button onClick={() => console.log(user)} className="sos-button" href="">GTFO</Button>
  </Fragment>
)

export default Home
