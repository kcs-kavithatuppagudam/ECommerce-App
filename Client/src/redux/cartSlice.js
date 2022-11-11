import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cartHandler",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      let exist = state.cartItems.find((x) => x.id === product.id);

      if (!exist) {
        state.cartItems.push(product);
      } else {
        state.cartItems = [...state.cartItems];
      }
    },
    incQty: (state, { payload }) => {
      state.quantity += payload;
    },
    delItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    decQty: (state, {payload}) => {
      let existProduct=state.cartItems.find((y)=>y.id===payload)
      if(existProduct){
         state.quantity=state.quantity-existProduct.qty
      }
    },
  },
});

export const { addItem, incQty, delItem,decQty } = cartSlice.actions;

export default cartSlice.reducer;
