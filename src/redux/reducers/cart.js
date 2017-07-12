import { ADDTOCART } from '../constants/ActionTypes'

const initialState = []

export default function cart (state = initialState, action) {
  switch (action.type) {
    case ADDTOCART:
      let flag = false
      let addGood = action.good
      let newState = state.map((good) => {
        if (good.id === addGood.id) {
          good.num += 1
          flag = true
        }
        return good
      })
      console.log(newState)
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
    default:
      return state
  }
}
