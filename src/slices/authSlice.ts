import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; 

interface User {
  id: string;
  name: string;
  email: string;
  routeId:string
}

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  { user: User }, 
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error: any) {
      console.error("Error Login:", error);
      return rejectWithValue(error.response?.data?.message || "Error Login");
    }
  }
);

export const registerUser = createAsyncThunk<
  { user: User }, 
  { name: string; email: string; password: string },
  { rejectValue: string }
>(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error: any) {
      console.error("Error SignUp:", error);
      return rejectWithValue(error.response?.data?.message || "Error SignUp");
    }
  }
);

export const verifyEmail = createAsyncThunk<
  { user: User },
  { email: string; otp: string },
  { rejectValue: string }
>(
  "auth/verifyEmail",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { email, otp });
      return response.data;
    } catch (error: any) {
      console.error("Error verification email:", error);
      return rejectWithValue(error.response?.data?.message || "Error Verification");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
