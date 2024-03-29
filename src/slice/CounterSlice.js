import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'Counter',
    initialState:0,
    reducers: {
        increment: (state) =>{
            return state = state+1;
        },
        decrement: (state) =>{
            return state = state -1;
        }
    }
})

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;