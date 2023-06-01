// import { createSlice,  configureStore } from "@reduxjs/toolkit";
// const customerSlice = createSlice({
// name: "cust",
// initialState: {isCustomer: false},
// reducers: {
//     customer(state){
//         state.isCustomer = true
//     },
//     SP(state){
//         state.isCustomer = false
//     },
// },
// });
// export const CustomerActions = customerSlice.actions
// export const store = configureStore({
//     reducer: customerSlice.reducer
// })

import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  isCustomer: false
};

function customerReducer(state = initialState, action) {
  switch(action.type) {
    case 'Customer':
      return { isCustomer: true };
    case 'SP':
      return { isCustomer : false };
    default:
      return state;
  }
}

export const store = configureStore({
    reducer : customerReducer
});
export const CustomerActions = customerReducer.action;