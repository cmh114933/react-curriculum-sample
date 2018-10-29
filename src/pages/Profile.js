import React, { Component } from 'react'

import GetImages from '../containers/GetImages'
import { post } from '../utils/authorizedRequest'
import { UPLOAD_IMAGE_URL } from '../constants/APIS'

export default class Profile extends Component {
  state = {
    imageUrl: ''
  }

  _handleImageUrlChange = (e) => {
    e.preventDefault()
    this.setState({ imageUrl: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    post(UPLOAD_IMAGE_URL, { imageUrl: this.state.imageUrl })
      .then(() => {

      })
      .catch(() => {

      })
  }

  render() {
    const { imageUrl } = this.state
    return (
      <div>
        <p>User Profile</p>
        <form onSubmit={this._handleSubmit}>
          <input
            type={'text'}
            placeholder={'Image URL'}
            value={imageUrl}
            onChange={this._handleImageUrlChange} />
          <input type={'submit'} />
        </form>
        <GetImages profilePage />
      </div>
    )
  }
}
