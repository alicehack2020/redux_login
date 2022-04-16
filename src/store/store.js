import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";

const store=configureStore({
    reducer:{
        loginstate:loginReducer
    }
})

export default store;