import React from "react";

import styles from "../Header/Header.module.css";

const Header = () => {


  return (
    <section className={styles.header}>
      <section className={styles.gridMain}>
        <div>
          <div className={styles.divTitleGridMain}>
            <h1>É hora de começar a diferença na sua vida!</h1>
          </div>

          <div className={styles.divConteudoMainCont}>
            <h1>
              Bem Vindo ao <span>FitBalance</span>
            </h1>
            <p>
              Despertar sua melhor versão envolve um compromisso com um estilo
              de vida saudável que combina exercícios regulares e uma
              alimentação equilibrada. Ao seguir este guia, você estará no
              caminho certo para alcançar seus objetivos de saúde e bem-estar.
              Lembre-se de que a jornada para a melhoria contínua é um processo
              gradual. Com dedicação e paciência, você pode transformar sua vida
              e alcançar seu pleno potencial.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
