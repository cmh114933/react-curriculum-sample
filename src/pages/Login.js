import React, { Component } from 'react'
import axios from 'axios'

import { LOGIN_URL } from '../constants/APIS'

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  _handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  _handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state

    axios.post(LOGIN_URL, {
      email: email,
      password: password
    }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        localStorage.setItem("authToken", response.headers["Authorization"])
      }).catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { email, password } = this.state
    return <div>
      <form
        className={'loginForm'}
        onSubmit={this._handleSubmit}>
        <label>Email</label>
        <input
          type={'text'}
          name={'email'}
          placeholder={'Email'}
          value={email}
          onChange={this._handleEmailChange} />
        <label >Password</label>
        <input
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          value={password}
          onChange={this._handlePasswordChange} />
        <input type={'submit'} disabled={!(password.length > 6 && email && email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/g))} />
      </form>
    </div>
  }
}