import React from "react";

import styles from "../CardImportancia/CardImportancia.module.css";

import exerciciosImg from "../../assets/images/halter.jpg";
import mentalImg from "../../assets/images/mental.jpg";

const CardImportancia = () => {
  return (
    <>
      <section>

        <div className="flex justify-center items-center my-10 font-bold text-xl lg:text-3xl text-center">
          <h1>A Importância de ter hábitos saudáveis</h1>
        </div>
        <div className="flex flex-col bg-primaryColor rounded-3xl py-10 text-white gap-10 md:flex-row md:justify-evenly">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="font-bold text-2xl bg-borda rounded-3xl border-b-2 border-white px-5 py-2">Exercícios</h1> 
            <img className="w-2/3 lg:w-80 h-64 lg:h-72 rounded-3xl border-2 border-borda" src={exerciciosImg} />
            <p className="font-bold mx-20 text-center text-xl">
              Fazer exercícios é benéfico porque melhora a saúde geral,
              fortalece o corpo, ajuda a controlar o peso, aumenta a
              flexibilidade, e melhora o bem-estar mental. A atividade física
              regular reduz o risco de doenças crônicas, melhora a qualidade do
              sono, e aumenta a energia e a disposição para as atividades
              diárias.
            </p>
          </div>

          <div  className="flex flex-col justify-center items-center gap-10 md:justify-normal">
            <h1 className="font-bold text-2xl bg-borda rounded-3xl border-b-2 border-white px-5 py-2">Alimentação</h1>
            <img className="w-2/3 lg:w-80 h-64 lg:h-72 rounded-3xl border-2 border-borda" src={mentalImg} />
            <p className="font-bold mx-20 text-center text-xl">
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
