import React, { Component } from 'react'
import axios from 'axios'

import ImagesList from '../components/ImagesList'

export default class Home extends Component {
  state = {
    imageList: [],
    errorMsg: ""
  }

  _getImages = () => {
    const { userId } = this.props
    axios.get(`http://localhost:4567/images${userId ? `?userId=${userId}` : ''}`)
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
