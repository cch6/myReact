import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '$redux/actions'
import goodList from '../assets/goods'
import Good from './Good'

import './GoodsList.css'

class GoodsList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    goodsList: PropTypes.array
  }
  handleClick = () => {
    this.props.actions.getGoodsList(goodList)
  }
  render () {
    return (
      <div className='good-list'>
        <button onClick={this.handleClick}>get goodslist</button>
        <p>商品列表</p>
        <div className='list'>
          {this.props.goodsList.map((good, index) => (
            <Good goodIndex={index} key={good.id} />
          ))}
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
