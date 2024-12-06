import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./async/authSlice";
// import usersReducer from "./async/usersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // users: usersReducer,
    },
});