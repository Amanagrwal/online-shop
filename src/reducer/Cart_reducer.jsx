import React from 'react';

function Cart_reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let existingProduct = state.cart.find((curelem) => {
        return curelem.id === id + color;
      });

      if (existingProduct) {
        let updatedCart = state.cart.map((curelem) => {
          if (curelem.id === id + color) {
            let newAmount = curelem.amount + amount;

            if (newAmount >= curelem.max) {
              newAmount = curelem.max;
            }
            return {
              ...curelem,
              amount: newAmount,
            };
          } else {
            return curelem;
          }
        });
        return {
          ...state,
          cart: updatedCart,
        };
      }

      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":
      let filteredCart = state.cart.filter(
        (curelem) => curelem.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };

    case "REMOVE_ALL":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECRESE":
      let decrementedCart = state.cart.map((curelem) => {
        if (curelem.id === action.payload) {
          let newAmount = curelem.amount - 1;

          if (newAmount <= 1) {
            newAmount = 1;
          }

          return {
            ...curelem,
            amount: newAmount,
          };
        } else {
          return curelem;
        }
      });
      return {
        ...state,
        cart: decrementedCart,
      };

    case "SET_INCRESE":
      let incrementedCart = state.cart.map((curelem) => {
        if (curelem.id === action.payload) {
          let newAmount = curelem.amount + 1;

          if (newAmount >= curelem.max) {
            newAmount = curelem.max;
          }

          return {
            ...curelem,
            amount: newAmount,
          };
        } else {
          return curelem;
        }
      });
      return {
        ...state,
        cart: incrementedCart,
      };

    case "UPDATE_ITEMS_AND_PRICE":
      let { total_price, total_item } = state.cart.reduce(
        (accum, curelem) => {
          let { amount, price } = curelem;
          accum.total_item += amount;
          accum.total_price += price * amount;
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_price,
        total_item,
      };

    default:
      return state;
  }
}

export default Cart_reducer;
