import { createStore } from "redux";

// imena akcija


const ADD_TO_CART = "ADD TO CART";
const REMOVE_FROM_CART = "REMOVE FROM CART";
const EMPTY_CART = "EMPTY CART";

// action creator

export const addToCart = (product) => {
  console.log(product)
  return ({
  type: ADD_TO_CART,
  payload: product,
})};

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});


// initail state (pocetno stanje)

const initalState = {
  products: [],
};

// reducer

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export const cartStore = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
