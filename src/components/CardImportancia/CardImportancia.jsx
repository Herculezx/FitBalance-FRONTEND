import React from "react";

import styles from "../CardImportancia/CardImportancia.module.css";

import exerciciosImg from "../../assets/images/halter.jpg";
import mentalImg from "../../assets/images/mental.jpg";

const CardImportancia = () => {
  return (
    <>
      <section>

        <div className={styles.title}>
          <h1>A Importância de ter hábitos saudáveis</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.card1}>
            <h1>Exercícios</h1> 
            <img className={styles.img} src={exerciciosImg} />
            <p>
              Fazer exercícios é benéfico porque melhora a saúde geral,
              fortalece o corpo, ajuda a controlar o peso, aumenta a
              flexibilidade, e melhora o bem-estar mental. A atividade física
              regular reduz o risco de doenças crônicas, melhora a qualidade do
              sono, e aumenta a energia e a disposição para as atividades
              diárias.
            </p>
          </div>

          <div className={styles.card2}>
            <h1>Alimentação</h1>
            <img className={styles.img} src={mentalImg} />
            <p>
              Uma alimentação saudável é fundamental para manter o corpo
              funcionando corretamente, prevenir doenças e promover bem-estar
              geral. Pode melhorar a saúde geral, aumentar a energia, fortalecer
              o sistema imunológico e reduzir o risco de doenças crônicas. Uma
              alimentação saudável é a base para uma vida longa e ativa.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default CardImportancia;
