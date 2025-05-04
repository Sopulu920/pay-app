import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UserSlice"
import loginReducer from "../slice/LoginSlice"
import dataReducer from "../slice/DataSlice"

export const store = configureStore({
    reducer: {
       user: userReducer,
       login: loginReducer,
       data: dataReducer,
    },
});

export default store;
