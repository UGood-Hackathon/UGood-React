import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'

const Start = (props) => (
  <Fragment className="page">
    <h1 className="page-headers">Getting Started</h1>
    <p className="instructions"> In order to get started with our service, make an account and then press the button below to get started. You will recieve a text from us with next steps</p>
    <Button className="start-button" href="">Let&apos;s Start!</Button>
    <p className="disclaimer"> Please note that standard messaging rates may apply.</p>
  </Fragment>
)

export default Start
