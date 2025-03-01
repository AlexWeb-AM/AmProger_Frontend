import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "https://amproger-backend.onrender.com/api/user"; 
const API_URL_LOCAL = 'http://localhost:5001/api/user'

interface User {
  id: string;
  name: string;
  email: string;
  routeId:string;
  posts:number;
  likes:number;
  savePosts:string[];
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      throw new Error('Email not found in localStorage');
    }

    const response = await fetch(`${API_URL_LOCAL}/get-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), 
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const data = await response.json();
    return data; 
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default userSlice.reducer;
