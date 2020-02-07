import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
// import { changePhone } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import Icon from '@mdi/react'
import { mdiArrowLeftBold } from '@mdi/js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Edit extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
      oldPhone: '',
      newPhone: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/home'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert({
          heading: 'Change Password Failed',
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  // onChangePhone = event => {
  //   event.preventDefault()
  //
  //   const { alert, history, user } = this.props
  //
  //   changePhone(this.state, user)
  //     .then(() => alert({
  //       heading: 'Change Phone Number Success',
  //       variant: 'success'
  //     }))
  //     .then(() => history.push('/home'))
  //     .catch(error => {
  //       console.error(error)
  //       this.setState({ phone: '' })
  //       alert({
  //         heading: 'Change Phone Number Failed',
  //         variant: 'danger'
  //       })
  //     })
  // }

  // <h1>Change Phone Number</h1>
  // <p>Current Phone Number: {this.user.phone}</p>
  // <Form onSubmit={this.onChangePhone}>
  //   <Form.Group controlId="newPhone">
  //     <Form.Label>New Phone Number</Form.Label>
  //     <Form.Control
  //       required
  //       name="newPhone"
  //       value={newPhone}
  //       type="phone"
  //       placeholder="New Phone Number"
  //       onChange={this.handleChange}
  //     />
  //   </Form.Group>
  //   <Button
  //     variant="primary"
  //     type="submit"
  //   >
  //     Submit
  //   </Button>
  // </Form>

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="row form">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <p className="back"><Icon path={mdiArrowLeftBold} title="Back" size={1}
            color="#01024e"/><a href="#user">Go Back</a></p>
          <h1>Change Password</h1>
          <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
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

export default withRouter(Edit)
