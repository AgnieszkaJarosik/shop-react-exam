import React from "react";
import PropTypes from "prop-types";
import Product from "Components/Product/Product";
import styles from "./ProductsList.module.css";

function ProductsList({ products }) {
   return (
    <div className={styles.products}>
      {products.map( product => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          amount={product.amount} >
        </Product>
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsList;