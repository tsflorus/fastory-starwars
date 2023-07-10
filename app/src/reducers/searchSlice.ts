import {createSlice} from '@reduxjs/toolkit'
import {searchName} from "../actions/searchActions";

const initialState = {
  loading: false,
  searchResult: {},
  error: null,
  success: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [searchName.pending]: (state: { loading: boolean; error: null; }) => {
      state.loading = true
      state.error = null
    },
    // @ts-ignore
    [searchName.fulfilled]: (state: { loading: boolean; success: boolean; searchResult: {} }, {payload}: any) => {
      state.loading = false
      state.success = true
      state.searchResult = payload
    },
    // @ts-ignore
    [searchName.rejected]: (state: { loading: boolean; error: any; }, {payload}: any) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default searchSlice.reducer
