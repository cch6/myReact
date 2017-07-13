import { ADDTOCART, CARTLISTADD, CARTLISTSUB, CARTLISTDEL } from '../constants/ActionTypes'

const initialState = []

export default function cart (state = initialState, action) {
  let newState = []
  switch (action.type) {
    case ADDTOCART:
      let flag = false
      let addGood = action.good
      newState = state.map((good) => {
        if (good.id === addGood.id) {
          good.num += 1
          flag = true
        }
        return good
      })
      if (!flag) {
        newState.push({
          id: addGood.id,
          image: addGood.image,
          name: addGood.name,
          num: 1,
          price: addGood.price
        })
      }
      newState.sort((a, b) => a.id - b.id)
      return newState
    case CARTLISTADD:
      return state.map((good) => {
        if (good.id === action.id) {
          good.num += 1
        }
        return good
      })
    case CARTLISTSUB:
      newState = state.map((good) => {
        if (good.id === action.id) {
          good.num -= 1
        }
        return good
      })
      newState.sort((a, b) => a.id - b.id)
      return newState
    case CARTLISTDEL:
      state.map((good) => {
        if (good.id !== action.id) {
          newState.push(good)
        }
      })
      newState.sort((a, b) => a.id - b.id)
      return newState
    default:
      return state
  }
}
