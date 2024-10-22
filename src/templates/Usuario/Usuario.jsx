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
           <div className="flex flex-col items-center">
 
                <div className="font-bold text-2xl text-center py-10">
                    <h1>Bem vindo Colaborador! <span className="underline"> {currentUser.nome} </span> </h1>
                </div>
               <section className="p-5 w-4/5 shadow">
                    <div className="flex flex-col gap-5 items-center">
                        <Link to={'/usuarionovo'} 
                            className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
                            Novo Usuário
                        </Link>
                        <Link to={'/usuarioslista'} 
                            className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
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