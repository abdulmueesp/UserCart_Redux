import { createSlice } from "@reduxjs/toolkit";

const InitialState={

    cartCount:0,
    cartList:[],
}

const cartSlice=createSlice({
    name:"cart",
    initialState:InitialState,
    reducers:{
        addtocart:(state)=>{
            state.cartCount=1
        }
    }
})

export const{addtocart}=cartSlice.actions 
export default cartSlice.reducer;