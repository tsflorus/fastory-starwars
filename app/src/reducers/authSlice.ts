import {createSlice} from '@reduxjs/toolkit'
import {loginUser, logoutUser} from "../actions/authActions";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [loginUser.pending]: (state: { loading: boolean; error: null; }) => {
      state.loading = true
      state.error = null
    },
    // @ts-ignore
    [loginUser.fulfilled]: (state: { loading: boolean; success: boolean; userInfo: {} }, {payload}: any) => {
      state.loading = false
      state.success = true
      state.userInfo = payload
    },
    // @ts-ignore
    [loginUser.rejected]: (state: { loading: boolean; error: any; }, {payload}: any) => {
      state.loading = false
      state.error = payload
    },
    // @ts-ignore
    [logoutUser.pending]: (state: { loading: boolean; error: null; }) => {
      state.loading = true
      state.error = null
    },
    // @ts-ignore
    [logoutUser.fulfilled]: (state: { loading: boolean; success: boolean; userInfo: {} }) => {
      state.loading = false
      state.success = true
      state.userInfo = {}
    },
    // @ts-ignore
    [logoutUser.rejected]: (state: { loading: boolean; error: any; }, {payload}: any) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default authSlice.reducer
