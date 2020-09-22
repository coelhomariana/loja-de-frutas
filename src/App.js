import React, { useReducer } from "react";
import Filters from "./components/Filters";
import ProductsList from "../src/components/ProductsList";
import Cart from "../src/components/Cart";
import { AppWrapper } from "../src/styles/index";
import CartContext from "./contexts/CartContext";
import FiltersContext from "./contexts/FiltersContext";
import { storeReducer, initialState } from "./reducers/store";

function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch: dispatch }}>
      <FiltersContext.Provider
        value={{ filters: state.filters, dispatch: dispatch }}
      >
        <AppWrapper>
          <Filters />
          <ProductsList />
          <Cart />
        </AppWrapper>
      </FiltersContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
