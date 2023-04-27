import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import meals from "./mealSlice";

const store = configureStore({
  reducer: { meals },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
