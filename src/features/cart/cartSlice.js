import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: {
  //     pizzaId: 2,
  //     name: 'Capricozza',
  //     unitPrice: 14,
  //     totalPrice: 28,
  //     quantity: 2,
  //   },
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    addItem(state, action) {
      //payload==newItem
      state.cart.push(action.payload);
    },

    clearCart(state) {
      state.cart = [];
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
  },
});

export const {
  addItem,
  clearCart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
