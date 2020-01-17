import React from "react";
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import Container from 'Components/Container/Container';

function Menu() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.nav}>
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Menu;