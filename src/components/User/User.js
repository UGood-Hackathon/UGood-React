import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

// <Card.Text> Email: {user.email}</Card.Text>
// <Card.Text> Phone Number: {user.phone}</Card.Text>
const authenticatedOptions = (
  <Fragment>
    <h1 className="page-headers">Your Profile</h1>
    <Button href="#edit" className="navButton">Edit Information</Button>
    <Button href="#sign-out" className="navButton">Sign Out</Button>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Your Current Information:</Card.Title>
        <Card.Text> Email: {this.user}</Card.Text>
        <Card.Text> Phone Number: {this.user}</Card.Text>
      </Card.Body>
    </Card>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <h1 className="page-headers">Welcome!</h1>
    <h2> Either Sign In or Sign Up to Get Started.</h2>
    <Button href="#sign-up" className="navButton">Sign Up</Button>
    <Button href="#sign-in" className="navButton">Sign In</Button>
  </Fragment>
)

const User = ({ user }) => {
  console.log('User is: ', user)
  if (user) {
    console.log('User is authenticated')
    return authenticatedOptions
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
