// import { createContext, useReducer } from "react";

// export const Store = createContext();; //to save the data in our react app application

// const initailState = {
//   cart: { cartItems: [] }
// }

// function reducer(state, action) {
//   switch (action.type) { //to check the item's type 
//     case 'CART_ADD_ITEM': { //if the action is  ''
//       const newItem = action.payload; //get newitem from the payload of that item
//       //then search for the state for the new item using find method on the cartItems in the cart object of  the state
//       const existItem = state.cart.cartItems.find((item) => item.slug === newItem.slug);
//       const cartItems = existItem ? state.cart.cartItems.map((item) =>
//         item.name === existItem.name ? newItem : item
//       ) :
//         [...state.cart.cartitems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } }
//     }
//     default:
//       return state;
//   }
// }

// export function StoreProvider({ children }) {
//   //this react component accapt children as a parameter and what it does is to create a wrapper for the children
//   // and pass store.provider too and make it available store.provider for the children
//   // lets define the reducer hook and pass to it the reducer function as its first parameter 
//   // and the initial state as the second parameter
//   const [state, dispatch] = useReducer(reducer, initailState); //Use redeuce returns the current state and a dispath method
//   const value = { state, dispatch } //Is the method used to dispatch action and trigger state changes to the  store

//   return <Store.Provider value={value}>{children}</Store.Provider>
//   // Provider is a wrapper for all components
// }

import { createContext, useReducer } from 'react';

export const store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
          item.name === existItem.name ? newItem : item
        )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{children}</store.Provider>;
}