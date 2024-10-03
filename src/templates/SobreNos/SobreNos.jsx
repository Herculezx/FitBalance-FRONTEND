import React from "react";

import MenuAlt from "../../components/MenuAlt/MenuAlt";

import styles from "../SobreNos/SobreNos.module.css"

import imgObjetivo from "../../assets/images/imgObjetivoSobreNos.jpg"
import imgLogo from "../../assets/images/fitBalanceLogo.png"
import imgDuvida from "../../assets/images/imgDuvida.jpg"
import imgAlvo from "../../assets/images/imgAlvo.jpg"
import Footer from "../../components/Footer/Footer";

function SobreNos() {
    return (
        <div>
            <MenuAlt />

            <section className={styles.secGrid}>

            <section className={styles.mainSection}>

                <div className={styles.div1}>
                    <div>
                        <h1>Nosso Objetivo:</h1>
                        <p>
                            Nós somos uma empresa que visa o desenvolvimento e a melhoria da qualidade de vida dos nossos usuários, fornecendo meios para que possam aproveitar melhor os modelos salvos por eles.
                            Separamos três áreas essenciais para o início de uma vida melhor: Exercícios, Rotina, e Alimentação.
                        </p>
                    </div>
                    <div>
                        <img src={imgObjetivo} className={styles.img}/>
                    </div>
                </div> {/* Div 1 Nosso Objetivo , 1 linha*/}

                <div className={styles.div2}>
                    <div>
                        <img src={imgLogo} className={styles.img}/>
                    </div>
                    <div>
                        <h1>Quem nós somos?</h1>
                        <p>
                            Nós temos o objetivo de ajudar os usuários, recomendando exercícios e ajudando a criar rotinas de acordo com seus dados "pessoais" para que o usuário posse ter uma vida mais saudável.
                            Queremos que o usuário se sinta a vontade para criar rotinas agradáveis ao seu gosto, e exercícios de acordo com o necessário para o seu corpo.
                        </p>
                    </div>
                </div> {/* Div 2 Nosso Objetivo , 2 linha*/}

                <div className={styles.div3}>
                    <div>
                        <h1>O Que Fazemos:</h1>
                        <p>
                            Na FitMind, nossa missão é ajudar você a construir uma rotina e uma vida mais saudável. Acreditamos que pequenas mudanças podem fazer uma grande diferença, e estamos aqui para orientar você em cada passo dessa jornada.
                            Oferecemos uma ampla gama de orientações para melhorar sua saúde física e mental, promovendo hábitos que transformam seu dia a dia.
                        </p>
                    </div>
                    <div>
                        <img src={imgDuvida} className={styles.img}/>
                    </div>
                </div> {/* Div 3 Nosso Objetivo , 3 linha*/}

                <div className={styles.div4}>
                    <div>
                        <img src={imgAlvo} className={styles.img5}/>
                    </div>
                    <div className={styles.divText}>
                        <h1>Mercado Alvo:</h1>
                        <p>
                            Nosso público-alvo é composto  <br /> por pessoas que desejam melhorar sua qualidade de vida  <br /> através de hábitos saudáveis. Atendemos indivíduos que:
                        </p>
                    </div>
                </div> {/* Div 4 Nosso Objetivo , 4 linha*/}

                <div className={styles.div5}>
                    <ul>
                        <li>Estão buscando uma vida mais equilibrada e saudável</li>
                        <li>Desejam melhorar sua alimentação e hábitos alimentares</li>
                        <li>Querem incorporar exercícios físicos de forma regular e prazerosa em suas rotinas</li>
                        <li>Buscam orientação para manter uma rotina saudável a longo prazo</li>
                    </ul>
                    <p>
                        Se você está pronto para transformar sua vida e adotar hábitos que realmente fazem a diferença, a FitMind está aqui para ajudar. Junte-se a nós e descubra o caminho para uma vida mais saudável e feliz.
                    </p>
                </div>

            </section > {/*Seção principal da página, vai conter todas as linhas*/}

            </section> {/* Seção para Grid */}

            <Footer />

        </div >
    )
}

export default SobreNos