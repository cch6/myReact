import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, goodsListSub } from '$redux/actions'

import './Good.css'

class Good extends Component {
  static propTypes = {
    goodIndex: PropTypes.number,
    goodsList: PropTypes.array,
    dispatch: PropTypes.func
  }
  add2cart = () => {
    const {dispatch, goodsList, goodIndex} = this.props
    const good = goodsList[goodIndex]
    if (good.left > 0) {
      dispatch(goodsListSub(good.id))
      dispatch(addToCart(good))
    }
  }
  render () {
    const {goodsList, goodIndex} = this.props
    const good = goodsList[goodIndex]
    return (
      <div className='good'>
        <img src={good.image} alt='' />
        <p className='good-name'>商品名：{good.name}</p>
        <span>剩余：{good.left} </span>
        <button onClick={() => this.add2cart()}>add to cart</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goodsList: state.goodsList
  }
}

export default connect(mapStateToProps)(Good)
