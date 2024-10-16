import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"
import logo from '../../assets/images/home.png'
import UsuarioService from "../../services/UsuarioService"

const Usuario = () => {
    
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

    return (
        <div>
           <MenuResponsive />
           <div className="p-3 w-100">
 
                <div className="font-bold text-2xl text-center py-10">
                    <h1>Bem vindo Colaborador! <span className="underline"> {currentUser.nome} </span> </h1>
                </div>
               <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/usuarionovo'} 
                            className="btn btn-lg btn-primary">
                            Novo Usuário
                        </Link>
                        <Link to={'/usuarioslista'} 
                            className="btn btn-lg btn-warning">
                            Lista de Usuários
                        </Link>
                    </div>
                </section>
           </div>
           <Sidebar />
           <FooterResponsive />
        </div>
    )
}

export default Usuario