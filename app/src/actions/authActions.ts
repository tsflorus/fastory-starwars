import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {API_BASE_URL} from "../constants/config";


export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }: {username: string, password: string}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${API_BASE_URL}/login`,
        { username, password },
        config
      )
      localStorage.setItem('username', data.username);
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

export const logoutUser = createAsyncThunk(
  'auth/logout',
  // eslint-disable-next-line no-empty-pattern
  async ({}, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.get(
        `${API_BASE_URL}/logout`,
        config
      );
      localStorage.removeItem('username');
      window.location.href = '/';
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
)
