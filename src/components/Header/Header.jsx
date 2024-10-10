import React from "react";

import styles from "../Header/Header.module.css";

const Header = () => {


  return (
    <>
      <div className="w-full h-[91vh] bg-cover flex items-center bg-center bg-[url('/background-homepage-edit.jpg')] // sm:grid sm:grid-cols-custom ">
        <div className="flex flex-col gap-4 text-white justify-start bg-[#181818eb] rounded-xl // sm:col-start-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(53,224,105,0.15)]">
          <div className="text-xl text-white py-4 font-bold bg-[#01D87D] rounded-xl flex items-center justify-center flex-wrap // sm:text-xl lg:text-2xl">
            <h1>É hora de começar a diferença na sua vida!</h1>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center ">
            <h1 className="font-bold text-xl underline underline-offset-[10px] sm:text-2xl">
              Bem Vindo ao <span className="text-primaryColor underline underline-offset-[10px]">FitBalance</span>
            </h1>
            <p className="py-4 mx-10 font-medium text-md text-center sm:text-lg">
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
      </div>
    </>
  );
};

export default Header;
