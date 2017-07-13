import React from 'react'
import PropTypes from 'prop-types'

import './Good.css'

const Good = ({good, addToCart}) => {
  return (
    <div className='good'>
      <img src={good.image} alt='' />
      <p className='good-name'>商品名：{good.name}</p>
      <span>剩余：{good.left} </span>
      <button onClick={() => addToCart(good)}>add to cart</button>
    </div>
  )
}

Good.propTypes = {
  good: PropTypes.object,
  addToCart: PropTypes.func
}

export default Good
