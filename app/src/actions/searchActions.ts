import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {API_BASE_URL} from "../constants/config";

export const searchName = createAsyncThunk(
  'search/name',
  async ({ nameToSearch, filter }: {nameToSearch: string, filter: string}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      let url = `${API_BASE_URL}/search/${nameToSearch}`
      if (filter) {
        url = url.concat(`/${filter}`)
      }
      const { data } = await axios.get(
        url,
        config
      )
      return data
    } catch (error) {
      // return custom error message from backend if present
      // @ts-ignore
      if (error.response && error.response.data.message) {
        // @ts-ignore
        return rejectWithValue(error.response.data.message)
      } else {
        // @ts-ignore
        return rejectWithValue(error.message)
      }
    }
  }
);

export const searchItem = createAsyncThunk(
  'search/item',
  async ({ id, category }: {id: string, category: string}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${API_BASE_URL}/search/${id}`,
        {category},
        config
      )
      return data
    } catch (error) {
      // return custom error message from backend if present
      // @ts-ignore
      if (error.response && error.response.data.message) {
        // @ts-ignore
        return rejectWithValue(error.response.data.message)
      } else {
        // @ts-ignore
        return rejectWithValue(error.message)
      }
    }
  }
);
