import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {cartAddMid, cartSubMid} from '$redux/actions'
import CartGood from './CartGood'

import './GoodsList.css'

const CartList = ({cart, dispatch}) => {
  const add = (id) => dispatch(cartAddMid(id))
  const sub = (id) => dispatch(cartSubMid(id))
  return (
    <div className='good-list'>
      <p>购物车</p>
      <div className='list'>
        {cart.map((good) => (
          <CartGood good={good} add={add} sub={sub} key={good.id} />
        ))}
      </div>
    </div>
  )
}

CartList.propTypes = {
  cart: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartList)
