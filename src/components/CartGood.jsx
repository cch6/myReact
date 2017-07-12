import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Good.css'

export default class GoodsList extends Component {
  static propTypes = {
    good: PropTypes.object
  }
  render () {
    return (
      <div className='good'>
        <img src={this.props.good.image} alt='' />
        <p className='good-name'>商品名：{this.props.good.name}</p>
        <span>数量：{this.props.good.num} </span>
        <button>+ 1</button>
        <button>- 1</button>
      </div>
    )
  }
}
