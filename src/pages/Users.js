import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { get } from '../utils/authorizedRequest'
import { USERS_URL } from '../constants/APIS'

export default class Users extends Component {
  state = {
    users: [],
    errorMsg: ""
  }

  componentDidMount() {
    get(USERS_URL)
      .then((response) => {
        this.setState({ users: response.data })
      }).catch((err) => {
        this.setState({ errorMsg: "Error Detected!" })
      })
  }

  render() {
    const { users } = this.state
    return (
      <div>
        <ul>
          {
            users.map((user, index) => {
              return (
                <li>
                  <Link key={`user_${index}`} to={`/users/${user}/gallery`} >{user}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}