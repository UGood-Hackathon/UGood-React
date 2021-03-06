import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PasswordInput from '../PasswordShowHide/PasswordShowHide'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import Icon from '@mdi/react'
import { mdiArrowLeftBold } from '@mdi/js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextField from '@material-ui/core/TextField'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(res => console.log(this.state.user))
      .then(() => history.push({
        pathname: '/home',
        state: {}
      }))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="row form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <p className="back"><Icon path={mdiArrowLeftBold} title="Back" size={1}
            color="#01024e"/><a href="#user">Go Back</a></p>
          <h1>Sign In</h1>
          <Form onSubmit={this.onSignIn}>
            <Form.Group controlId="email">
              <br/>
              <TextField
                fullWidth="true"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <br/>
              <PasswordInput
                fullWidth="true"
                required
                name="password"
                value={password}
                placeholder="Password"
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

export default withRouter(SignIn)
