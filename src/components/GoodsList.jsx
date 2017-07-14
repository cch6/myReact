import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '$redux/actions'
import Good from './Good'

import './GoodsList.css'

class GoodsList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    goodsList: PropTypes.array
  }

  render () {
    const {addToCartMid, getGoodsListByAjax} = this.props.actions
    const goodsList = this.props.goodsList.map((good) => (
      <Good good={good} key={good.id} addToCart={addToCartMid} />
    ))

    return (
      <div className='good-list'>
        <button onClick={getGoodsListByAjax}>get goodslist</button>
        <p>商品列表</p>
        <div className='list'>
          {goodsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    goodsList: state.goodsList
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodsList)
