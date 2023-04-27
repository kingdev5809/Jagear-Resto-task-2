import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  foods: [],
});

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    mealsFetched: (state, action) => {
      state.meals = action.payload;
    },
  },
});

const { actions, reducer } = mealSlice;

export default reducer;

export const { mealsFetched } = actions;
