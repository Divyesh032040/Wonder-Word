

// // // //IMP Points !
// // // //we also export individual reducer so that component can access particular state

// // // //action gives payload and state gives current state 

// // // //that particular reducers called actions so always export that all reducers from const {login,logout} = authSlice.actions 

// // // //1) configureStore , 2) createSlice -> obj(name , initialState , reduces : fn : (state , action)) 



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

