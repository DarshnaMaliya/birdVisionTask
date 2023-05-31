import { createSlice,  configureStore } from "@reduxjs/toolkit";
const customerSlice = createSlice({
name: "auth",
initialState: {isCustomer: false},
reducers: {
    customer(state){
        state.isCustomer = true
    },
    SP(state){
        state.isCustomer = false
    },
},
});
export const CustomerActions = customerSlice.actions
export const store = configureStore({
    reducer: customerSlice.reducer
})