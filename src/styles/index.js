import React from "react";
import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

export const ProductItem = styled.div`
  padding: 5px;
  border: 1px solid black;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const DeleteButton = styled.span`
  color: red;
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`