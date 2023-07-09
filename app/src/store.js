import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import searchReducer from './reducers/searchSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: authReducer
  }
})
export default store
