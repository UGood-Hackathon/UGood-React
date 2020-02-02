import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function authenticatedOptions (props) {
  return (
    <Fragment>
      <h1 className="page-headers">Your Profile</h1>
      <Button href="#edit" className="navButton">Edit Information</Button>
      <Button href="#sign-out" className="navButton">Sign Out</Button>
      <Card style={{ width: '100%vw', backgroundColor: '#ff6464', color: '#01024e' }}>
        <Card.Body>
          <Card.Title>Your Current Information:</Card.Title>
          <Card.Text> Email: {props.user.email}</Card.Text>
          <Card.Text> Phone Number: {props.user.phone}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

const unauthenticatedOptions = (
  <Fragment>
    <h1 className="page-headers">Welcome!</h1>
    <h2> Please Sign In or Sign Up to Get Started.</h2>
    <Button href="#sign-up" className="navButton">Sign Up</Button>
    <Button href="#sign-in" className="navButton">Sign In</Button>
  </Fragment>
)

const User = (props) => {
  console.log('User is: ', props.user)
  if (props.user) {
    console.log('User is authenticated')
    return authenticatedOptions(props)
  } else {
    console.log('unauthenticated')
    return unauthenticatedOptions
  }
}

// const User = (props) => (
//   <Fragment>
//     <Button href="#edit">Edit Information</Button>
//     <Button href="#sign-out">Sign Out</Button>
//     <Button href="#sign-up">Sign Up</Button>
//     <Button href="#sign-in">Sign In</Button>
//   </Fragment>
// )

export default User
