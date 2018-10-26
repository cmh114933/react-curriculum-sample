import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  state = {
    imageList: [],
    errorMsg: ""
  }
  _getImages = () => {
    axios.get("http://localhost:4567/images")
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
        <div className='gallery-list' >
          {
            imageList.map((imageUrl, index) => {
              return <img
                className='gallery-img'
                key={`img_${index}`}
                src={imageUrl} alt={'test'}></img>
            })
          }
        </div>
      </div>
    )
  }
}
