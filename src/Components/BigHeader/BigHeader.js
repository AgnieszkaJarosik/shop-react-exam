import React from "react";
import PropTypes from 'prop-types';
import styles from 'Components/BigHeader/BigHeader.module.css';

function BigHeader ({ text }) {
  return <h1 className={styles.headerBig}>{text}</h1>;
}

BigHeader.propTypes={
  text: PropTypes.string.isRequired,
}

export default BigHeader;