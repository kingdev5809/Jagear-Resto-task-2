import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  foods: [],
  basket: [],
  totalPrice: 0,
});

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    mealsFetched: (state, action) => {
      state.meals = action.payload;
    },
    addToBasket: (state, action) => {
      let { idMeal } = action.payload;
      const itemIndex = state.basket.findIndex(
        (item) => item.idMeal === idMeal
      );
      if (itemIndex !== -1) {
        state.basket[itemIndex].quantity++;
        state.totalPrice = state.totalPrice + action.payload.price;
        
      } else {
        state.basket.push({ ...action.payload });
        state.totalPrice = state.totalPrice + action.payload.price;
      }
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
      state.totalPrice = state.totalPrice - (action.payload.quantity * action.payload.price);
    },
  },
});

const { actions, reducer } = mealSlice;

export default reducer;

export const { mealsFetched, addToBasket, removeFromBasket } = actions;
