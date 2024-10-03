import React from "react";
import logo from "../../assets/images/logoNew.png";
import styles from "../AreaFitBalance/AreaFitBalance.module.css"

function AreaFitBalance() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>
          <h1>Áreas Do FitBalance E Suas Descrições</h1>
        </div>

        <div className={styles.mainCont}>
          <div className={styles.cardDiv}>
            <h1>Área de exercícios:</h1>
            <p>
              A área de exercícios do <span>FITBALANCE</span> é uma página com 3 modelos
              salvos para quem quer mudar de vida, sendo eles, iniciante, para
              quem nunca praticou exercícios, ou não tem hábito de praticar.
              Intermediário para quem já praticou, ou tem costume de se
              exercitar. Avançado para quem treina regularmente, e já está mais
              acostumado. O usuário poderá salvar um modelo predefinido de
              exercícios, após o seu login.
            </p>
          </div>
          <div className={styles.logoDiv}>
            <img src={logo} />
            <p> Entre em nossas áreas </p>
            <a href={'/areas'}>Entrar</a>
          </div>
          <div className={styles.cardDiv}>
            <h1>Área de Alimentação:</h1>
            <p>
              A área de alimentação do <span>FITBALANCE</span> é uma página de orientação ao
              usuário, com instruções do que fazer, dependendo do seu objetivo,
              sendo eles, perca de peso, e ganho de peso. Nosso objetivo é
              fornecer a você as ferramentas e o conhecimento necessários para
              alcançar suas metas de forma eficiente. Com orientações claras e
              dicas valiosas, você terá o suporte necessário para fazer escolhas
              alimentares que se alinhem com seus objetivos de saúde e
              bem-estar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AreaFitBalance;
