import React, { Component } from 'react'

export default class ImagesList extends Component {
  render() {
    const { images } = this.props
    return (
      <div className='gallery-list' >
        {
          images.map((image, index) => {
            return <img
              className='gallery-img'
              key={`img_${index}`}
              src={image} alt={'test'}></img>
          })
        }
      </div>
    )
  }
}