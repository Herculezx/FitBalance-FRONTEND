import React, { useEffect } from "react";

import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

import logoG from "../../assets/images/fitLogoG.jpg";

import vetorLogin from "../../assets/images/vetorLogin.jpg"
import styles from "../Cadastro/Cadastro.module.css";
import useForm from "../../hooks/useForm";
import useEnviar from "../../hooks/useEnviar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import useRequisitar from "../../hooks/useRequisitar";

const Cadastro = () => {
    const navigate = useNavigate();

    const { mudar, valores, mudarDireto } = useForm({
        imagem: undefined,
        nome: "",
        senha: "",
        email: "",
        dataNascimento: new Date(Date.now()),
    });

    const { requisitar } = useEnviar(() => {
        navigate("/login");
        console.log("recebido");
    });

    console.log(valores);
    function salvarFoto(e) {
        const file = e.target?.files[0] ?? "";
        const reader = new FileReader();

        reader.onload = (event) => {
            console.table(file.name.split(".").pop());
            mudarDireto("imagem", event.target?.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    console.log(valores);

    return (
        <div>
            <MenuResponsive />

            <section className="mt-10 flex flex-col lg:flex-row justify-evenly items-center">

                <div className="flex flex-col gap-5 items-center shadow py-5 rounded-xl sm:w-4/5 lg:ml-16 xl:ml-24">

                    <div className="flex flex-col items-center font-bold text-2xl gap-4 w-4/5">
                        <h2 className="text-xl text-center text-wrap bg-3d rounded-3xl p-2 text-bd">Seja Bem Vindo, <span className="text-primaryColor underline"> Faça seu Cadastro!</span> </h2>
                    </div>

                    <div className="w-4/5">
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                requisitar("usuario/create", valores);
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="font-bold text-xl">Nome:</label>
                                <input
                                    onChange={mudar("nome")}
                                    type="text"
                                    id="nome"
                                    className="form-control text-center fw-medium shadow"
                                    placeholder="Seu Nome"
                                    name="nome"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-bold text-xl">Email:</label>
                                <input
                                    onChange={mudar("email")}
                                    type="email"
                                    id="email"
                                    className="form-control text-center fw-medium shadow"
                                    placeholder="exemplo@gmail.com"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="font-bold text-xl">Senha:</label>
                                <input
                                    onChange={mudar("senha")}
                                    type="password"
                                    id="password"
                                    className="form-control text-center fw-medium shadow"
                                    placeholder="******"
                                    name="senha"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="data" className="font-bold text-xl">Data de Nascimento</label>
                                <input
                                    onChange={mudar("dataNascimento")}
                                    type="date"
                                    name="data"
                                    id="data"
                                    className="form-control text-center fw-medium shadow"
                                    required
                                />
                            </div>

                            <div className="flex flex-col items-center gap-4 mt-4 justify-evenly">
                                <button type="submit" className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"> Confirmar </button>
                                <a href={"/login"} className="font-bold underline text-primaryColor">
                                    <span className="text-borda">Já possui uma?</span> Entre agora!{" "}
                                </a>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="w-full">
                    <img
                        className="w-[35rem] h-full hidden lg:block"
                        src={vetorLogin} alt="nao suportado" />
                </div>
            </section>

            <FooterResponsive />
        </div>
    );
};

export default Cadastro;
