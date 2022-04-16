const { createSlice } = require("@reduxjs/toolkit");
 
const LoginSlice=createSlice({
    name:'login',
    initialState:false,
    reducers:{
        loginStatus(state,action)
        {
           state=action.payload 
        }
    }
})

export const {loginStatus}=LoginSlice.actions;
export  default LoginSlice.reducer;