import * as types from '../constants/ActionTypes'

const initialState = []

export default function goodsList (state = initialState, action) {
  switch (action.type) {
    case types.GETGOODSLIST:
      return [...action.goodsList]
    case types.GOODSLISTADD:
      let newState = state.map((good) => {
        if (good.id === action.id) {
          good.left += 1
        }
        return good
      })
      return newState
    case types.GOODSLISTSUB:
      return state.map((good) => {
        if (good.id === action.id) {
          good.left -= 1
        }
        return good
      })
    default:
      return state
  }
}
