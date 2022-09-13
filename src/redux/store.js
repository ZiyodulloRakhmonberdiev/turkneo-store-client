import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import favoriteReducer from './favoriteRedux'

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer
  }
})
