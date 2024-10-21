import { Link } from "react-router-dom";

import Sidebar from "../../components/Menu/Sidebar";

import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";

import imgExercise from "../../assets/images/exercises.jpg";
import imgAlimentacao from "../../assets/images/logo.png";

import UsuarioService from "../../services/UsuarioService";
import AcessoNegado from "./AcessoNegado";
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import Login from "../Login/Login";
import ButtonReUse from "../../components/BUTTONS/ButtonReUse";

const Home = () => {
    const currentUser = UsuarioService.getCurrentUser();

    return (
        <>
            {currentUser ? (
                <div>
                    <MenuResponsive />
                    <div className="font-bold my-10 text-2xl text-center lg:my-14 md:text-[2rem]">
                        <h1>Essas são nossas Áreas!</h1>
                    </div>
                    <section className="flex justify-center items-center">
                        {/* Div de Título da página Areas */}
                        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
                            <div className="flex flex-col items-center gap-10 bg-3d py-5 rounded-xl w-[90%]">
                                <h1 className="text-bd font-bold text-3xl bg-borda py-2 text-center w-72 rounded-xl">Exercícios</h1>
                                <img
                                    src={imgExercise}
                                    alt=""
                                    className="w-72 h-44 rounded-2xl border-solid border-primaryColor border-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(53,224,105,0.15)]"
                                />
                                <p className="text-bd mx-5 text-lg font-bold text-center md:text-left">
                                    Praticar atividade física regularmente ajuda no processo de
                                    emagrecimento, e controle de peso, queimando calorias, e
                                    mantendo a massa magra, melhorando a qualidade de vida.
                                </p>
                                <ButtonReUse nameBtn="Entrar" link={'/exercicios'}/>
                            </div>
                            {/* Grid 1 */}
                            <div className="flex flex-col items-center gap-10 bg-3d py-5 rounded-xl w-[90%]">
                                <h1 className="text-bd font-bold text-3xl bg-borda py-2 text-center w-72 rounded-xl">Alimentação</h1>
                                <img
                                    src={imgAlimentacao}
                                    alt=""
                                    className="w-72 h-44 rounded-2xl border-solid border-primaryColor border-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(53,224,105,0.15)]"
                                />
                                <p className="text-bd mx-5 text-lg font-bold text-center md:text-left">
                                Uma alimentação balanceada é fundamental para a saúde, fornecendo nutrientes essenciais e energia, ajudando na prevenção de doenças e promovendo um estilo de vida saudável.
                                </p>
                                <ButtonReUse nameBtn="Entrar" link={'/alimentacao'}/>
                            </div>
                            {/* Grid 2 */}
                        </div>
                        {/* Div de grid para estilizar o conteudo principal */}
                    </section>
                    {/* Section do conteudo principal */}
                    <Sidebar />
                    <FooterResponsive />
                </div>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Home;
