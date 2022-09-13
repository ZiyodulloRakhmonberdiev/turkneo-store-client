import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addFavorite: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload.product)
      state.total += action.payload.price
    }
  }
})

export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
