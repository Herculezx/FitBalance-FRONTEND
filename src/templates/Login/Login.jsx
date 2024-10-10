import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import UsuarioService from "../../services/UsuarioService";
import logoG from "../../assets/images/fitLogoG.jpg"
import styles from "../Login/Login.module.css";
import "../../index.css"
import "../App/App.css"

import Menu from "../../components/MenuAlt/MenuAlt"

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
            <Menu />

            <section className={styles.mainSection}>

                <div className={styles.divLogo}>
                    <img src={logoG}/>
                </div>

                <div className={styles.divCont}>

                    <div className={styles.divTitleLogin}>
                        <h2>Entre em sua conta!</h2>
                        <a href={'/cadastro'}><span>Não tem uma conta?</span> Crie agora! </a>
                    </div>

                    <div>
                        <form action="" onSubmit={handleSubmit} className={styles.divForm}>
                            <div className={styles.divInp}>
                                 <label htmlFor="email" >Email:</label>
                                 <input type="email" id="email" className={styles.input} placeholder="exemplo@gmail.com"
                                 name="email"
                                 value={formData.email || ""}
                                 onChange={handleChange} />
                            </div>
    
                            <div className={styles.divInp}>
                                 <label htmlFor="password" >Senha:</label>
                                 <input type="password" id="password"  className={styles.input} placeholder="******"
                                 name="senha"
                                 value={formData.senha || ""}
                                 onChange={handleChange} />
                            </div>

                            <div>
                                {message}
                            </div>

                            <div className={styles.divBtn}>
                                 <button type="button" onClick={backto}> Cancelar </button>
                                 <button type="submit"> Entrar </button>
                            </div>

                            <div className={styles.divEsq}>
                                <p>Esqueceu a senha?
                                    <Link to={'/forgotpass'}> Clique aqui.</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </section>
            
            <Footer />

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