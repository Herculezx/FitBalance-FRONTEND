import React from "react";
import logo from "../../assets/images/logoNew.png";
import styles from "../AreaFitBalance/AreaFitBalance.module.css"

function AreaFitBalance() { 
  return (
    <>
      <section>
        <div className="flex items-center justify-center my-10 font-bold text-xl lg:text-3xl text-center">
          <h1>Áreas Do FitBalance E Suas Descrições</h1>
        </div>

        <div className="flex flex-col bg-3d rounded-[30px] w-full py-10  lg:flex-row">
          <div className="flex flex-col items-center gap-10 lg:justify-center">
            <h1 className="font-bold text-white underline underline-offset-[10px] text-xl lg:text-2xl">Área de exercícios:</h1>
            <p className="mx-5 text-white font-normal text-center sm:text-lg  xl:text-2xl lg:text-wrap">
              A área de exercícios do <span className="text-primaryColor underline font-bold">FITBALANCE</span> é uma página com 3 modelos
              salvos para quem quer mudar de vida, sendo eles, iniciante, para
              quem nunca praticou exercícios, ou não tem hábito de praticar.
              Intermediário para quem já praticou, ou tem costume de se
              exercitar. Avançado para quem treina regularmente, e já está mais
              acostumado. O usuário poderá salvar um modelo predefinido de
              exercícios, após o seu login.
            </p>
          </div>
          <div className="my-10 flex flex-col items-center gap-3 justify-center border-y-2 border-white border-solid py-4">
            <img src={logo} className="mini:w-60 md:w-80 rounded-3xl border-solid border-2 border-borda shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"/>
              <p className="font-bold text-white text-lg"> Entre em nossas áreas </p>
              <a className="bg-primaryColor font-bold text-white w-3/6 h-10 flex items-center justify-center rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  lg:w-full  md:w-4/12 " href={'/home'}>Entrar</a>
          </div>
          <div className="flex flex-col items-center gap-10 lg:justify-center">
            <h1 className="font-bold text-white underline underline-offset-[10px] text-xl lg:text-2xl">Área de Alimentação:</h1>
            <p className="mx-5 text-white font-normal text-center sm:text-lg xl:text-2xl lg:text-wrap">
              A área de alimentação do <span className="text-primaryColor underline font-bold">FITBALANCE</span> é uma página de orientação ao
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
