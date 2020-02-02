import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
// import Card from 'react-bootstrap/Card'

// <Card.Text> Email: {user.email}</Card.Text>
// <Card.Text> Phone Number: {user.phone}</Card.Text>
// const authenticatedOptions = (
//   <Fragment>
//     <Button href="#edit">Edit Information</Button>
//     <Button href="#sign-out">Sign Out</Button>
//
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Your Current Information:</Card.Title>
//       </Card.Body>
//     </Card>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <h2> Either Sign In or Sign Up to Get Started.</h2>
//     <Button href="#sign-up">Sign Up</Button>
//     <Button href="#sign-in">Sign In</Button>
//   </Fragment>
// )

// const User = ({ user }) => {
//   if (user) {
//     return (
//       <Fragment>
//         { user ? authenticatedOptions : unauthenticatedOptions }
//       </Fragment>
//     )
//   }
//   return null
// }

const User = (props) => (
  <Fragment>
    <Button href="#edit">Edit Information</Button>
    <Button href="#sign-out">Sign Out</Button>
    <Button href="#sign-up">Sign Up</Button>
    <Button href="#sign-in">Sign In</Button>
  </Fragment>
)

export default User
