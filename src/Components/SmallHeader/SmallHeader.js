import React from "react";
import PropTypes from 'prop-types';
import styles from 'Components/SmallHeader/SmallHeader.module.css';

function SmallHeader ({ text }) {
  return <h2 className={styles.headerSmall}>{text}</h2>;
}

SmallHeader.propTypes={
  text: PropTypes.string.isRequired,
}

export default SmallHeader;