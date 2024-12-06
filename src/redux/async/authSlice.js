import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import  axios from "axios";

const API_URL = "https://fe-react-agency-api-dash.vercel.app/auth";

export const login = createAsyncThunk("auth/login", async (data) => {
    const response = await axios.post(`${API_URL}/login`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
    const response = await axios.post(`${API_URL}/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
});

const initialState = {
    token: null,
    username: "",
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.username = action.payload.username;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        });
        // logout
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.token = null;
            state.username = "";
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        });
    },
});

export const { setToken, setUsername } = authSlice.actions;
export default authSlice.reducer;