import React from "react";

import MenuAlt from "../../components/MenuAlt/MenuAlt";

import styles from "../SobreNos/SobreNos.module.css"

import imgObjetivo from "../../assets/images/imgObjetivoSobreNos.jpg"
import imgLogo from "../../assets/images/logoNew.png"
import imgDuvida from "../../assets/images/imgDuvida.jpg"
import imgAlvo from "../../assets/images/imgAlvo.jpg"
import Footer from "../../components/Footer/Footer";
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";

function SobreNos() {
    return (
        <div>
            <MenuResponsive />

            <section className="mt-10">

                <section className="flex flex-col lg:grid lg:grid-cols-customSobreNos lg:justify-items-center">

                    <div className="flex flex-col py-10 border-b-2 border-borda gap-5 items-center text-center md:flex-row md:px-10 md:justify-evenly lg:w-4/5 lg:col-start-2 lg:px-0">
                        <div className="flex gap-5 flex-col">
                            <h1 className="text-2xl underline font-bold">Quem nós somos?</h1>
                            <p className="px-5 text-md">
                                Nós somos uma empresa que visa o desenvolvimento e a melhoria da qualidade de vida dos nossos usuários, fornecendo meios para que possam aproveitar melhor os modelos salvos por eles.
                                Separamos duas áreas essenciais para o início de uma vida melhor: Exercícios, e Alimentação.
                            </p>
                        </div>
                        <img src={imgLogo} className="w-80 h-56 rounded-3xl border-[1px] border-borda shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                        <div>
                        </div>
                    </div> {/* Div 1 Nosso Objetivo , 1 linha*/}

                    <div className="flex flex-col py-10 border-b-2 border-borda gap-5 items-center text-center md:flex-row md:px-10 lg:w-4/5 lg:col-start-2 lg:px-0">
                        <div>
                            <img src={imgObjetivo} className="w-80 h-56 rounded-3xl border-[1px] border-borda shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                        </div>
                        <div className="flex gap-5 flex-col">
                            <h1 className="text-2xl underline font-bold">Nosso Objetivo:</h1>
                            <p className="px-5 text-md">
                                Nós temos o objetivo de ajudar os usuários, recomendando exercícios e ajudando a criar rotinas de acordo com seus dados "pessoais" para que o usuário posse ter uma vida mais saudável.
                                Queremos que o usuário se sinta a vontade para criar rotinas agradáveis ao seu gosto, e exercícios de acordo com o necessário para o seu corpo.
                            </p>
                        </div>
                    </div> {/* Div 2 Nosso Objetivo , 2 linha*/}

                    <div className="flex flex-col py-10 border-b-2 border-borda gap-5 items-center text-center md:flex-row md:px-10 lg:w-4/5 lg:col-start-2 lg:px-0">
                        <div className="flex gap-5 flex-col">
                            <h1 className="text-2xl underline font-bold">O Que Fazemos:</h1>
                            <p className="px-5 text-md">
                                Nossa missão é ajudar você a construir uma vida mais saudável. Acreditamos que pequenas mudanças podem fazer uma grande diferença, e estamos aqui para orientar você em cada passo dessa jornada.
                                Oferecemos uma ampla gama de orientações para melhorar sua saúde física e mental, promovendo hábitos que transformam seu dia a dia.
                            </p>
                        </div>
                        <div>
                            <img src={imgDuvida} className="w-80 h-56 rounded-3xl border-[1px] border-borda shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                        </div>
                    </div> {/* Div 3 Nosso Objetivo , 3 linha*/}

                    <div className="flex flex-col py-10 gap-5 items-center border-b-2 border-borda lg:col-start-2">
                        <div>
                            <img src={imgAlvo} className="w-80 h-56 rounded-3xl border-[1px] border-borda shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                        </div>
                        <div className="flex gap-5 flex-col">
                            <h1 className="text-2xl underline font-bold text-center">Mercado Alvo:</h1>
                            <p className=" px-5 text-md">
                                Nosso público-alvo é composto por pessoas que desejam melhorar sua qualidade de vida através de hábitos saudáveis.
                            </p>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl underline font-bold text-center">Atendemos indivíduos que:</h1>
                                <div className="flex flex-col gap-4">
                                    <ul className="list-disc mx-10">
                                        <li>Estão buscando uma vida mais equilibrada e saudável.</li>
                                        <li>Desejam melhorar sua alimentação e hábitos alimentares.</li>
                                        <li>Querem incorporar exercícios físicos de forma regular e prazerosa em suas rotinas.</li>
                                        <li>Buscam orientação para manter uma rotina saudável a longo prazo.</li>
                                    </ul>
                                    <p className="mx-10 text-center">
                                        Se você está pronto para transformar sua vida e adotar hábitos que realmente fazem a diferença, a FitBalance está aqui para ajudar. Junte-se a nós e descubra o caminho para uma vida mais saudável e feliz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> {/* Div 4 Nosso Objetivo , 4 linha*/}

                </section > {/*Seção principal da página, vai conter todas as linhas*/}

            </section> {/* Seção para Grid */}

            <FooterResponsive />

        </div >
    )
}

export default SobreNos