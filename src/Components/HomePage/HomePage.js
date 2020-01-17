import React, { useState, useEffect } from "react";
import ProductsList from 'Components/ProductsList/ProductsList';
import Container from 'Components/Container/Container';
import BigHeader from 'Components/BigHeader/BigHeader';
import SmallHeader from 'Components/SmallHeader/SmallHeader';

import ProductsService from 'services/products.service';

function HomePage() {
  const [ products, setProducts ] = useState([]);

  const filterProducts = (productsArr, category) => {
    return productsArr.filter( product => product.category === category)
                      .filter( product => product.featured );
  }

  useEffect(() => {
    try {
      setProducts(ProductsService.getProducts());
    } catch (err) {
      setProducts([]);
    }
  }, []);

  const desktops = filterProducts( products, 'desktop' );
  const tablets = filterProducts( products, 'tablet' );

  return (
    <Container>
      <BigHeader text="Welcome to our store"></BigHeader>
      <SmallHeader text="Desktops"></SmallHeader>
      <ProductsList products={desktops} ></ProductsList>
      <SmallHeader text="Tablets"></SmallHeader>
      <ProductsList products={tablets} ></ProductsList>
    </Container>
  );
}

export default HomePage;