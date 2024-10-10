import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/system-logo_128_x_128.png';
import styles from "../Login/Login.module.css";
import { useState } from "react";
import useEnviar from "../../hooks/useEnviar"
import useForm from "../../hooks/useForm"


const LoginForgotPass = () => {
    const [parte , setParte] = useState(0);
    const [codigo, setCodigo] = useState()
    const { valores, mudar } = useForm({ email: "", codigo: "", senha: "" })
    const navigate = useNavigate();
    const { requisitar } = useEnviar()

    const goto = () => {
        navigate("/");
    }

    const backto = () => {
        navigate("/");
    }


    return (
        <div className="container">
            <form action="" className="login-form">
                {parte == 0 && <div>
                    <h1>informe o email</h1>
                        <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                        <input onChange={mudar("email")} value={valores.email} type="email" id="email" className="form-control text-center fw-medium shadow" />
                        <button type="button" onClick={async () => {
                            const resposta = await requisitar(`usuario/codigo/${valores.email}/`)

                            console.log(resposta)
                            setParte(1)
                        }} >proximo</button>
                    </div>}
                    {parte == 1 && <div>
                        <label htmlFor="codInput">Código que foi enviado</label>
                        <input type="text" name="codInp" id="codInp" />
                        <button onClick={() => {
                            if (valores.codigo == codigo) {
                                setParte(2)
                            }
                        }}>proximo</button>
                        </div>}
                    {parte == 2 && <div></div>}
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h5 className="text-center">Recuperação de Senha</h5>
                <div className="my-3">
                </div>
                <div className="d-flex flex-row-reverse mt-1">
                    <p className="fw-bold fst-italic opacity-75 me-1">Acessar o sistema:
                        <Link to={'/login'}> Clique aqui.</Link>
                    </p>
                </div>
                <div className="d-flex justify-content-center my-1 d-none" id="infos">
                    <p className="fw-bold fst-italic text-danger">
                        Dados Incorretos!!!
                    </p>
                </div>
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <button className="btn btn-warning fw-medium shadow" type="button"
                        onClick={backto}>Cancelar</button>
                    <button className="btn btn-success fw-medium shadow" type="submit"
                        onClick={goto} >Solicitar Nova Senha</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForgotPass