import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// import './App.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import Header from '../Header/Header'
import BottomNav from '../BottomNav/BottomNav'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from '../Home/Home'
import User from '../User/User'
import Start from '../Start/Start'
import Resources from '../Resources/Resources'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        <main className="container">
          <Route exact path='/home' render={() => (
            <Home alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/start' render={() => (
            <Start alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/resources' render={() => (
            <Resources alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/user' render={() => (
            <User alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
        <BottomNav user={user} />
      </Fragment>
    )
  }
}

export default App
