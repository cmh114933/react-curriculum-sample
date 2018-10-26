import React, { Component } from 'react'

import GetImages from '../containers/GetImages'

export default class Gallery extends Component {
  render() {
    return (
      <GetImages userId={this.props.match.params.userId} />
    )
  }
}
