import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"

import vetorLogin from "../../assets/images/vetorLogin.jpg"
import styles from "../Login/Login.module.css";
import "../../index.css"
import "../App/App.css"

import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";

const Login = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/home");
    } 

    const backto = () => {
        navigate("/");
    }

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const editar = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        console.log(formData)
        UsuarioService.signin(formData.email, formData.senha).then(
            () => {
                const userJson = localStorage.getItem("user");
                const user = JSON.parse(userJson || '{}');
                if (user.statusUsuario == 'ATIVO') {
                    navigate("/home");
                } else if (user.statusUsuario == 'TROCAR_SENHA') {
                    navigate(`/newpass/` + user.id);
                    //window.location.reload(); ordnael@email.com.br
                }

            },
            (error) => {
                const respMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(respMessage);
            }

        );
    };

    return (
        <div>
            <MenuResponsive />

            <section className="mt-10 flex flex-col lg:flex-row justify-evenly items-center">

                <div className="w-full">
                    <img 
                     className="w-[35rem] h-full hidden lg:block"   
                     src={vetorLogin} alt="nao suportado"/>
                </div>

                <div className="flex flex-col gap-5 items-center shadow py-5 rounded-xl sm:w-4/5 lg:mr-16 xl:mr-24">

                    <div className="flex flex-col items-center font-bold text-2xl gap-4">
                        <h2 className="text-xl text-center text-wrap bg-3d rounded-3xl p-2 text-bd w-4/5">Bem Vindo de Volta, <span className="text-primaryColor underline"> Entre em sua conta!</span> </h2>
                        <a href={'/cadastro'} className="text-borda font-bold"> Não tem uma conta? <span className="text-primaryColor underline text-2xl">Crie agora!</span> </a>
                    </div>

                    <div className=" w-4/5">
                        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                 <label htmlFor="email" className="font-bold text-xl">Email:</label>
                                 <input type="email" id="email" placeholder="exemplo@gmail.com"
                                 name="email"
                                 className="form-control text-center fw-medium shadow" 
                                 value={formData.email || ""}
                                 onChange={handleChange} />
                            </div>
    
                            <div className="flex flex-col gap-2">
                                 <label htmlFor="password" className="font-bold text-xl">Senha:</label>
                                 <input type="password" id="password" placeholder="******"
                                 name="senha"
                                 className="form-control text-center fw-medium shadow" 
                                 value={formData.senha || ""}
                                 onChange={handleChange} />
                            </div>

                            <div>
                                {message}
                            </div>

                            <div className="flex justify-evenly">
                                 <button type="submit" className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"> Entrar </button>
                                 <button type="button" onClick={backto} className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"> Cancelar </button>
                            </div>

                            <div className="flex justify-center">
                                <p className="font-bold text-md">Esqueceu a senha?
                                    <Link className="underline" to={'/forgotpass'}> Clique aqui.</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </section>
            
            <FooterResponsive />

        </div>
    )
}

export default Login



        // <div className="container">
        //     <form action="" className="login-form"  onSubmit={handleSubmit}>
        //         <div className="login-logo">
        //             <img src={logo} alt="logo" />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
        //             <input type="email" id="email" className="form-control text-center fw-medium shadow" 
        //                 name="email"
        //                 value={formData.email || ""}
        //                 onChange={handleChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="password" className="form-label mb-0 fw-bold">Senha:</label>
        //             <input type="password" id="password" className="form-control text-center fw-medium shadow" 
        //                 name="password"
        //                 value={formData.password || ""}
        //                 onChange={handleChange} />
        //         </div>

        //         <div className="text-center p-2 rounded-2">
        //             {message && (
        //                 <div className="fw-bold fs-5 text-danger">
        //                     <span>{message}</span>
        //                 </div>
        //             )}
        //         </div>
        //         <div className="d-flex justify-content-around mb-3 mt-2">
        //         </div>
        //     </form>
        // </div>