import React, { useState, useEffect } from "react";

import ProductsList from "Components/ProductsList/ProductsList";
import Container from "Components/Container/Container";
import BigHeader from "Components/BigHeader/BigHeader";
import Filter from "Components/Filter/Filter";

import ProductsService from 'services/products.service';
import styles from "./Catalog.module.css";

function Catalog() {
  const [ products, setProducts ] = useState([]);
  const [ word, setWord ] = useState('');
  const [ manufacturer, setManufacturer ] = useState('all');
 
  useEffect(() => {
    try {
      setProducts(ProductsService.getProducts());
    } catch (err) {
      setProducts([]);
    }

    return () => {
      setProducts([]);
      setWord('');
      setManufacturer('all')
      }
  }, []);

  const filterProducts = ( productsArr, name, maker ) => {
    if ( maker === 'all' && !name ) {
      return productsArr;
    }
    let productsToShow;
    if ( name ) {
      productsToShow = productsArr.filter( product => product.name.toUpperCase().includes(name.toUpperCase()));
    }
    if (maker !== 'all' && !name ) {
      productsToShow = productsArr.filter( product => product.manufacture.toUpperCase() === maker.toUpperCase() );
    } else if (maker !== 'all' && name ) {
      productsToShow = productsToShow.filter( product => product.manufacture.toUpperCase() === maker.toUpperCase() );
    }   
    return productsToShow;
  }

  const filteredProducts = filterProducts( products, word, manufacturer );

  const handleClear = () => {
    setWord('');
  }

  return (
    <Container>
      <BigHeader text="Catalog"></BigHeader>
      <div className={styles.catalog}>
        <div className={styles.columnLeft}>
          <Filter value={word} 
                  onChange={(value) => setWord( value )} 
                  onInputClick={(value) => setManufacturer( value )}
                  onClearClick={handleClear} >
          </Filter>
        </div>
        <div className={styles.columnRight}>
          <ProductsList products={filteredProducts} ></ProductsList>
        </div>
      </div>
    </Container>
  );
}

export default Catalog;