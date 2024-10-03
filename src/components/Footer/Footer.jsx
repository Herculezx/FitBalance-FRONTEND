import React from "react";

import styles from "./Footer.module.css"

import linkedin  from "../../assets/images/linkedin.png"
import facebook  from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import email     from "../../assets/images/email.png"
import github    from "../../assets/images/github.png"

const Footer = () => {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.divTitleFooter}>
          <h2>Fique Conectado Conosco!</h2>
          <div className={styles.ulLogos}>
            <ul>
              <li>
                <a href="#">
                  <img src={linkedin} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={email}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={github}/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerDiv}>
          <div className={styles.footerGrid1}>
            <a href="#">FitMind</a>
            <p>
              A empresa que faz acontecer a diferença em sua vida, tanto como
              fisíca, quanto também mental.
            </p>
          </div>

          <div className={styles.footerGrid2}>
            <a href="#">Sobre Nós</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Home</a>
          </div>

          <div className={styles.footerGrid3}>
            <a href="#">Contato</a>
            <p>Rua Paulo Mendes Guerra, 249, Barueri, SP</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
