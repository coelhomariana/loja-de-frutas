import React, { useState, useEffect, useContext } from "react";
import CartContext from "../contexts/CartContext";
import axios from "axios";
import { ProductsGrid, ProductItem } from "../styles/index";
import FiltersContext from "../contexts/FiltersContext";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/generic/lojinha";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const cartContext = useContext(CartContext);
  const filtersContext = useContext(FiltersContext);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addProductToCart = (product) => {
    cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: product });
  };

  let filteredProducts = products;

  if (filtersContext.filters.min !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price > filtersContext.filters.min;
    });
  }

  if (filtersContext.filters.max !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.price < filtersContext.filters.max;
    });
  }

  if (filtersContext.filters.name !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(filtersContext.filters.name);
    });
  }

  return (
    <>
      <div>
        <h4>Lista de produtos</h4>
        <ProductsGrid>
          {filteredProducts.map((product) => (
            <ProductItem>
              {product.name} - R${product.price.toFixed(2)}
              <img src={product.img} width="30%" alt="Foto do produto"></img>
              <button onClick={() => addProductToCart(product)}>
                Adicionar ao carrinho
              </button>
            </ProductItem>
          ))}
        </ProductsGrid>
      </div>
    </>
  );
};

export default ProductsList;
