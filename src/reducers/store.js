export const initialState = {
  cart: [],
  filters: {
    min: null,
    max: null,
    name: null,
  },
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const productInCart = state.cart.findIndex((product) => {
        return product.id === action.product.id;
      });

      let newCart;

      if (productInCart === -1) {
        newCart = [...state.cart, { ...action.product, quantity: 1 }];
      } else {
        newCart = state.cart.map((product) => {
          if (product.id === action.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }

      return { ...state, cart: newCart };

    case "REMOVE_ITEM_FROM_CART":
      return state;

    case "SET_FILTERS":
      return {
        ...state,
        filters: action.filters,
      };
    default:
      return state;
  }
};
