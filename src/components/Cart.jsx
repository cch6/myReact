import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '$redux/actions'
import CartGood from './CartGood'

import './GoodsList.css'

class GoodsList extends Component {
  static propTypes = {
    cart: PropTypes.array
  }

  render () {
    let goodsList = this.props.cart.map((good) => (
      <CartGood good={good} key={good.id} />
    ))

    return (
      <div className='good-list'>
        <p>购物车</p>
        <div className='list'>
          {goodsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodsList)
