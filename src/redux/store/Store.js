import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/UserSlice"
import loginReducer from "../slice/LoginSlice"
import dataReducer from "../slice/DataSlice"
import depositReducer  from "../slice/DepositSlice";

export const store = configureStore({
    reducer: {
       user: userReducer,
       login: loginReducer,
       data: dataReducer,
       deposit: depositReducer,
    },
});

export default store;