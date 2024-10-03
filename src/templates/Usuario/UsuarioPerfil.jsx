import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import perfil from '../../assets/images/perfil_blz.jpg'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import './Usuario.css';
import useRequisitar from "../../hooks/useRequisitar"

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"

const UsuarioPerfil = () => {

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: ""
    };


    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const { carregando, dados: usuario } = useRequisitar(`usuario/findById/${id}`);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }


    /*
        A propriedade 'value' para um campo de formulário sem um manipulador 'onChange', 
        faz com que o campo seja renderizado como somente de leitura. 
        Se o campo deve ser mutável, deve ser utilizada a propriedade 'defaultValue'. 
        Caso contrário, deve ser definida 'onChange' ou 'readOnly'.
    */
    return (
        <div className="">
            <div className="w-100">

                {carregando ? <h1>Carregando</h1> :
                    <section >
                        <MenuResponsive />
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <h1 className="font-bold text-4xl mt-5">
                                    Suas informações
                                </h1>
                            </div>
                            
                            <form className="bg-primaryColor mt-10 flex flex-col items-center justify-center p-5 rounded-3xl // sm:w-3/5 //  // // lg:w-4/5 lg:flex-row lg:gap-10 // xl:gap-48">
                                
                                <div className="flex items-center justify-center flex-col">
                                <button type="button" onClick={() => {
                                    navigate(-1)
                                }} className="btn btn-sm bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white">
                                    <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                                </button>
                                    <img className="rounded-2xl border-solid border-3d border-2 my-5" src={usuario.foto ? usuario.foto : perfil} alt="..." />
                                </div>

                                <div className="lg:flex-wrap">
                                    <div>
                                        <label htmlFor="inputNome" className="text-white font-bold text-xl //">Nome:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputNome" defaultValue={usuario.nome} />
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail4" className="text-white font-bold text-xl //">Email:</label>
                                        <input type="email" className="form-control border-solid border-2 border-3d // md:px-20" id="inputEmail4" readOnly
                                            defaultValue={usuario.email} />
                                    </div>

                                    <div>
                                        <label htmlFor="inputnivelAcesso" className="text-white font-bold text-xl //">Nível de Acesso:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputnivelAcesso" readOnly
                                            defaultValue={usuario.nivelAcesso} />
                                    </div>
                                    <div>
                                        <label htmlFor="inputStatus" className="text-white font-bold text-xl //">Status:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputStatus" readOnly
                                            defaultValue={usuario.statusUsuario} />
                                    </div>
                                </div>


                                <div className="flex flex-col gap-3 mt-5">
                                    <button type="submit" className="btn bg-3d text-white shadow hover:bg-bg-footer duration-150">
                                        Gravar Alterações
                                    </button>

                                    <button type="button" className="btn bg-3d text-white shadow hover:bg-bg-footer duration-150">
                                        Alterar a Senha
                                    </button>
                                </div>
                            </form>
                        </div>
                        <Sidebar />
                        <FooterResponsive />

                    </section>}
            </div>
        </div>
    )
}

export default UsuarioPerfil