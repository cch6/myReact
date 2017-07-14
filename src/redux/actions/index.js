import axios from 'axios'
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

export const cartListAdd = (id) => ({
  type: types.CARTLISTADD,
  id
})

export const cartListSub = (id) => ({
  type: types.CARTLISTSUB,
  id
})

export const cartListDel = (id) => ({
  type: types.CARTLISTDEL,
  id
})

/**
 * 异步获取goodslist中间件
 */ 
export const getGoodsListByAjax = () => (dispatch, getState) => {
  let getGoods = axios.get('/api/getGoods')
  getGoods.then(function (response) {
    // 请求成功处理
    dispatch(getGoodsList(response.data))
  })
  getGoods.catch(function (error) {
    // 请求失败处理
    console.log(error)
  })
}

/**
 * 添加good到cart中间件
 */ 
export const addToCartMid = (good) => (dispatch, getState) => {
  if (good.left > 0) {
    dispatch(goodsListSub(good.id))
    dispatch(addToCart(good))
  }
}

/**
 * 增加cart中good的数量 中间件
 */ 
export const cartAddMid = (id) => (dispatch, getState) => {
  let addGood
  let state = getState()
  state.goodsList.map((good) => {
    if (good.id === id) {
      addGood = good
    }
  })
  if (addGood.left > 0) {
    dispatch(goodsListSub(id))
    dispatch(cartListAdd(id))
  }
}

/**
 * 减少cart中good的数量 中间件
 */ 
export const cartSubMid = (id) => (dispatch, getState) => {
  let subGood
  let state = getState()
  dispatch(goodsListAdd(id))
  dispatch(cartListSub(id))
  state.cart.map((good) => {
    if (good.id === id) {
      subGood = good
    }
  })
  if (subGood.num === 0) {
    dispatch(cartListDel(id))
  }
}
