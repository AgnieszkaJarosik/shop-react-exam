import React from "react";
import PropTypes from 'prop-types';
import styles from './Product.module.css';

function Product({ image, name, amount }) {
  return (
    <div className={styles.product}>
      <img src={image} alt={name} />
  <p className={styles.price}>${amount}</p>
      <h3>{name}</h3>
    </div>
  );
}

Product.propTypes={
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired
}

export default Product;
