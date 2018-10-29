import React, { Component } from 'react'

import { get } from '../utils/authorizedRequest'
import ImagesList from '../components/ImagesList'
import { IMAGES_URL, MY_IMAGES_URL } from '../constants/APIS'

export default class Home extends Component {
  state = {
    imageList: [],
    errorMsg: ""
  }

  _getImages = () => {
    const { userId, profilePage } = this.props
    const imageUrl = profilePage
      ? MY_IMAGES_URL
      : userId
        ? `${IMAGES_URL}?userId=${userId}`
        : IMAGES_URL
    get(imageUrl)
      .then((response) => {
        this.setState({ imageList: response.data })
      }).catch((err) => {
        this.setState({ errorMsg: "Error Detected!" })
      })
  }

  componentDidMount() {
    this._getImages()
  }

  render() {
    const { imageList } = this.state
    return (
      <div>
        <button onClick={this._getImages}>Refresh</button>
        <ImagesList images={imageList} />
      </div>
    )
  }
}
