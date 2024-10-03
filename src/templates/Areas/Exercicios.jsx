import React from "react";

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";
import useRequisitar from "../../hooks/useRequisitar";
import useEnviar from "../../hooks/useEnviar";
import { useState } from "react";
import Sidebar from "../../components/Menu/Sidebar";
import { useEffect } from "react";
import CardExercicios from "../../components/CardExercicios/CardExercicios";
import UsuarioService from "../../services/UsuarioService";

const Exercicios = () => {
  const {
    carregando,
    dados,
    requisitar: recarregar,
  } = useRequisitar("exercicios/findAll");
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson || "{}");
  const [marcados, setMarcados] = useState([]);

  const currentUser = UsuarioService.getCurrentUser();

  const { requisitar } = useEnviar(() => recarregar());
  const { dados: usuario } = useRequisitar(
    "usuario/findByEmail/?email=" + user.email
  );

  useEffect(() => {
    if (usuario) {
      setMarcados(usuario.exercicios ?? []);
    }
  }, [usuario]);

  console.log(usuario);
  return (
    <div>
      <MenuResponsive />

      <section>
        <div className="flex flex-col items-center">
          <div className="text-center">
            {currentUser ? <h1 className="font-bold text-2xl mt-10 underline underline-offset-8 ">Bem vindo! {currentUser.nome} </h1> : <></>}
            <h1 className="mt-5 font-bold text-2xl">Exercícios</h1>
            <p className="mt-2 font-semibold text-3d text-opacity-85 text-lg">
              Praticar exercícios é essencial para se ter uma boa qualidade de
              vida!
            </p>
          </div>
          <h1 className="py-4 font-bold text-2xl">Modelos</h1>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const a = await requisitar("exercicios/marcar", marcados);
            console.log(a);
            alert("exercicios salvos");
          }}
          className="mt-10 border-[1.5px] border-borda py-10 rounded-3xl"
        >
          <div className="flex flex-row justify-evenly">
            <div>
              <div className="flex justify-center">
                <label htmlFor="iniciante" className="font-bold text-2xl mb-4 underline underline-offset-8">
                  Iniciante
                </label>
              </div>
              <div className="">
                <ul>
                  {dados &&
                    dados
                      .filter(
                        (Exercicios) =>
                          Exercicios.nivel.toLowerCase() == "iniciante"
                      )
                      .map((Exercicios) => (
                        <CardExercicios
                          Exercicios={Exercicios}
                          marcados={marcados}
                          setMarcados={setMarcados}
                        />
                      ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <label
                  htmlFor="intermediario"
                  className="font-bold text-2xl mb-4 underline underline-offset-8"
                >
                  Intermediário
                </label>
              </div>
              <div>
                <ul>
                  {dados &&
                    dados
                      .filter(
                        (Exercicios) =>
                          Exercicios.nivel.toLowerCase() == "intermediário"
                      )
                      .map((Exercicios) => (
                        <CardExercicios
                          Exercicios={Exercicios}
                          marcados={marcados}
                          setMarcados={setMarcados}
                        />
                      ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <label htmlFor="avancado" className="font-bold text-2xl mb-4 underline underline-offset-8">
                  Avançado
                </label>
              </div>
              <ul>
                {dados &&
                  dados
                    .filter(
                      (Exercicios) =>
                        Exercicios.nivel.toLowerCase() == "avançado"
                    )
                    .map((Exercicios) => (
                      <CardExercicios
                        Exercicios={Exercicios}
                        marcados={marcados}
                        setMarcados={setMarcados}
                      />
                    ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <button
              type="submit"
              className="bg-3d text-white text-xl py-2 px-10 rounded-xl border-solid border-2 border-borda font-bold hover:bg-borda duration-200 hover:underline hover:underline-offset-4"
            >
              Salvar
            </button>
          </div>
        </form>
      </section>
      <Sidebar />
      <FooterResponsive />
    </div>
  );
};

export default Exercicios;
