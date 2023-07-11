import {createSlice} from '@reduxjs/toolkit'
import {searchItem, searchName} from "../actions/searchActions";

const initialState = {
  loading: false,
  searchResult: {},
  itemDetails: {},
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
    // @ts-ignore
    [searchItem.pending]: (state: { loading: boolean; error: null; }) => {
      state.loading = true
      state.error = null
    },
    // @ts-ignore
    [searchItem.fulfilled]: (state: { loading: boolean; success: boolean; itemDetails: {} }, {payload}: any) => {
      state.loading = false
      state.success = true
      state.itemDetails = payload
    },
    // @ts-ignore
    [searchItem.rejected]: (state: { loading: boolean; error: any; }, {payload}: any) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default searchSlice.reducer
