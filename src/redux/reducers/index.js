import { combineReducers } from 'redux'
import cart from './cart'
import counter from './counter'
import goodsList from './goodsList'

export default combineReducers({
  counter,
  goodsList,
  cart
})
