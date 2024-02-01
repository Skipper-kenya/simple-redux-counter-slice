import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counterSlice } from "./counter/counterReducer";

const reducers = combineReducers({
  counter: counterSlice.reducer,
});

export const store = configureStore({ reducer: reducers });
