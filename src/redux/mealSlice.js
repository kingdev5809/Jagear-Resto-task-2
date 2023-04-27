import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  foods: [],
  basket: [],
});

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    mealsFetched: (state, action) => {
      state.meals = action.payload;
    },
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
  },
});

const { actions, reducer } = mealSlice;

export default reducer;

export const { mealsFetched, addToBasket } = actions;
