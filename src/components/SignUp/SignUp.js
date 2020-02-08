import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PasswordInput from '../PasswordShowHide/PasswordShowHide'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import Icon from '@mdi/react'
import { mdiArrowLeftBold } from '@mdi/js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      phone: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => history.push({
        pathname: '/home',
        state: {}
      }))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '', phone: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation, phone } = this.state

    return (
      <div className="row form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <p className="back"><Icon path={mdiArrowLeftBold} title="Back" size={1}
            color="#01024e"/><a href="#user">Go Back</a></p>
          <h1>Sign Up</h1>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <TextField
                fullWidth="true"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <PasswordInput
                fullWidth="true"
                required
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <PasswordInput
                fullWidth="true"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <TextField
                fullWidth="true"
                required
                name="phone"
                value={phone}
                type="phone"
                placeholder="Enter Phone Number (Ex. +16178675309)"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="submit"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
