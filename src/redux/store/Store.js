import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UserSlice"
import loginReducer from "../slice/LoginSlice"

export const store = configureStore({
    reducer: {
       user: userReducer,
       user: loginReducer,
    },
});

export default store;