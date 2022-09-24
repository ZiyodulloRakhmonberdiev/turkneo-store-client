import { publicRequest, userRequest } from '../requestMethods'
import { loginFailure, loginStart, loginSuccess } from './userRedux'
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess
} from './cartRedux'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    const res = await publicRequest.delete(`/products/find/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (err) {
    dispatch(deleteProductFailure(err))
    console.log(err)
  }
}
