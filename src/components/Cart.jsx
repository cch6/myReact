import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '$redux/actions'
import CartGood from './CartGood'

import './GoodsList.css'

class CartList extends Component {
  static propTypes = {
    goodsList: PropTypes.array,
    cart: PropTypes.array,
    actions: PropTypes.object
  }
  add = (id) => {
    let addGood
    this.props.goodsList.map((good) => {
      if (good.id === id) {
        addGood = good
      }
    })
    if (addGood.left > 0) {
      this.props.actions.goodsListSub(id)
      this.props.actions.cartListAdd(id)
    }
  }

  sub = (id) => {
    let subGood
    this.props.actions.goodsListAdd(id)
    this.props.actions.cartListSub(id)
    this.props.cart.map((good) => {
      if (good.id === id) {
        subGood = good
      }
    })
    if (subGood.num === 0) {
      this.props.actions.cartListDel(id)
    }
  }

  render () {
    return (
      <div className='good-list'>
        <p>购物车</p>
        <div className='list'>
          {this.props.cart.map((good) => (
            <CartGood good={good} add={this.add} sub={this.sub} key={good.id} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goodsList: state.goodsList,
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)
