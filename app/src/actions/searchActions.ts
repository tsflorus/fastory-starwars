import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {API_BASE_URL} from "../constants/config";

export const searchName = createAsyncThunk(
  'search/name',
  async ({ nameToSearch }: {nameToSearch: string}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `${API_BASE_URL}/search/${nameToSearch}`,
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
