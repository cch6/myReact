import * as types from '../constants/ActionTypes'

export const increment = () => ({
  type: types.INCREMENT
})

export const getGoodsList = (goodsList) => ({
  type: types.GETGOODSLIST,
  goodsList
})

export const goodsListAdd = (id) => ({
  type: types.GOODSLISTADD,
  id
})

export const goodsListSub = (id) => ({
  type: types.GOODSLISTSUB,
  id
})

export const addToCart = (good) => ({
  type: types.ADDTOCART,
  good
})
