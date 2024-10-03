import React from "react";
import { Link } from 'react-router-dom'

import styles from "../Menu/Menu.module.css";

const Menu = () => {


  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href={'/'}>FitBalance</a>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <a href={'/faleconosco'}>Fale Conosco</a>
            </li>
            <li>
              <a href={'/sobrenos'}>Sobre Nós</a>
            </li>
            <li>
              <a href={'/login'}>Entrar</a>
            </li>
          </ul>
        </nav>

        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
