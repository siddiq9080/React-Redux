
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  count: [],
  theme: "light", // Initial theme
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, count: [...state.count, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        count: state.count.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        count: state.count.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "TOGGLE_THEME": // Handle theme toggle
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer: cartReducer });

export default store;
