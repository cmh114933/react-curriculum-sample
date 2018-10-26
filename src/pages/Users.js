import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
export default class Users extends Component {
  state = {
    users: [],
    errorMsg: ""
  }

  componentDidMount() {
    axios.get('http://localhost:4567/users')
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
        <p>Hello</p>
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