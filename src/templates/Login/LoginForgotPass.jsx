import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/system-logo_128_x_128.png";
import { useState } from "react";
import useEnviar from "../../hooks/useEnviar";
import useForm from "../../hooks/useForm";
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";

const LoginForgotPass = () => {
    const [parte, setParte] = useState(0);
    const [codigo, setCodigo] = useState();
    const [conta, setConta] = useState();
    const { valores, mudar } = useForm({ email: "", codigo: "", senha: "" });
    const navigate = useNavigate();
    const { requisitar } = useEnviar();

    const goto = () => {
        navigate("/");
    };

    const backto = () => {
        navigate("/");
    };

    return (
        <div>
            <MenuResponsive />
            <div>
                <div className="flex justify-center items-center w-full my-20">
                    <form action="" className="border-[1.5px] rounded-xl p-5 flex flex-col">
                        {parte == 0 && (
                            <div className="flex flex-col gap-4">
                                <h1 className="font-bold text-xl bg-bg-footer p-2 rounded-xl text-bd">informe seu email para Verificação</h1>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="form-label mb-0 fw-bold text-xl">
                                        Email:
                                    </label>
                                    <input
                                        onChange={mudar("email")}
                                        value={valores.email}
                                        type="email"
                                        id="email"
                                        className="form-control text-center fw-medium shadow"
                                    />
                                </div>
                                <div className="flex justify-center my-5">
                                    <button
                                        className=" bg-3d py-2 w-2/5 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-1/2 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                        type="button"
                                        onClick={async () => {
                                            const resposta = await requisitar(
                                                `usuario/codigo/${valores.email}/`
                                            );

                                            console.log(resposta);
                                            setCodigo(resposta.codigo);
                                            setConta(resposta.conta);
                                            setParte(1);
                                        }}
                                    >
                                        Enviar Código
                                    </button>
                                </div>
                            </div>
                        )}
                        {parte == 1 && (
                            <div className="flex flex-col gap-5 items-center">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="codInput" className="font-bold text-xl">Insira o código que foi enviado</label>
                                    <input
                                        onChange={mudar("codigo")}
                                        type="text"
                                        name="codInp"
                                        id="codInp"
                                        className="form-control text-center fw-medium shadow"
                                    />
                                </div>
                                <button
                                    className=" bg-3d py-2 w-2/5 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-1/2 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                    type="button"
                                    onClick={() => {
                                        if (valores.codigo == codigo) {
                                            setParte(2);
                                        }
                                    }}
                                >
                                    Verificar
                                </button>
                            </div>
                        )}
                        {parte == 2 && (
                            <div>
                                <div className="flex flex-col items-center gap-5">
                                    <div className="flex flex-col gap-4">
                                        <label htmlFor="novaSenha" className="font-bold text-xl">Insira sua Nova Senha!</label>
                                        <input className="form-control text-center fw-medium shadow" type="password" name="novaSenha" id="novaSenha" onChange={mudar("senha")} />
                                    </div>

                                    <button
                                        className=" bg-3d py-2 w-3/4 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-[90%] duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                        onClick={async () => {
                                            await requisitar("usuario/codigo/", {
                                                senha: valores.senha,
                                                conta,
                                            });
                                            navigate(`/login`);
                                        }}
                                        type="button"
                                    >
                                        Salvar Senha Nova
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <FooterResponsive />
        </div>
    );
};

export default LoginForgotPass;
