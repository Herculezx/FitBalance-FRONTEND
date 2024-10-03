import React from "react";

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";
import SideBar from "../../components/Menu/Sidebar"

import UsuarioService from "../../services/UsuarioService";

import imgAlimentacao from "../../assets/images/logo.png";

const Areas = () => {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson || "{}");
  const currentUser = UsuarioService.getCurrentUser();
  return (
    <div>
      <MenuResponsive />
      <section>
        <div>
          {currentUser ? (
            <span className="">
              <h1 className="flex content-center justify-center mt-4  text-3xl font-bold ">
                Bem vindo! {currentUser.nome} Essas são nossas Áreas!
              </h1>
            </span>
          ) : (
            <></>
          )}
        </div>
        {/* Div de Título da página Areas */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 md:mt-10 mt-10 bg-3d h-auto">
          <div className="flex items-center justify-center gap-y-8 flex-col">
            <h1 className="mt-12 text-white font-bold text-3xl">Exercícios</h1>
            <img
              src={imgAlimentacao}
              alt=""
              className="w-72 h-44 rounded-2xl border-solid border-primaryColor border-3"
            />
            <p className="text-white font-semibold mx-20 text-center text-lg">
              Praticar atividade física regularmente ajuda no processo de
              emagrecimento e controle de peso, queimando calorias e mantendo a
              massa magra, melhorando a qualidade de vida.
            </p>
            <a
              href={"/exercicios"}
              className="text-white bg-primaryColor border-solid border-3d border-2 mb-10 rounded-xl w-48 h-12 flex items-center justify-center font-bold text-xl"
            >
              Entrar
            </a>
          </div>
          {/* Grid 1 */}
          <div className="flex items-center justify-center gap-y-8 flex-col">
            <h1 className="mt-12 text-white font-bold text-3xl">Alimentação</h1>
            <img
              src={imgAlimentacao}
              alt=""
              className="w-72 h-44 rounded-2xl border-solid border-primaryColor border-3"
            />
            <p className="text-white font-semibold mx-20 text-center text-lg">
              Se alimentar de forma saudável é um papel essencial no
              desenvolvimento do corpo e no processo de ganho de massa muscular
              e no emagrecimento.
            </p>
            <a
              href={"/alimentacao"}
              className="text-white bg-primaryColor border-solid border-3d border-2 mb-10 rounded-xl w-48 h-12 flex items-center justify-center font-bold text-xl"
            >
              Entrar
            </a>
          </div>
          {/* Grid 2 */}
        </div>
        {/* Div de grid para estilizar o conteudo principal */}
      </section>
      {/* Section do conteudo principal */}
      
      <SideBar />

      <FooterResponsive />
    </div>
  );
};

export default Areas;
