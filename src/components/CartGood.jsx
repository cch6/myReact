import React from 'react'
import PropTypes from 'prop-types'

import './Good.css'

const CartGood = ({good, add, sub}) => {
  return (
    <div className='good'>
      <img src={good.image} alt='' />
      <p className='good-name'>商品名：{good.name}</p>
      <span>数量：{good.num} </span>
      <button onClick={() => add(good.id)}>+ 1</button>
      <button onClick={() => sub(good.id)}>- 1</button>
    </div>
  )
}

CartGood.propTypes = {
  good: PropTypes.object,
  add: PropTypes.func,
  sub: PropTypes.func
}

export default CartGood
