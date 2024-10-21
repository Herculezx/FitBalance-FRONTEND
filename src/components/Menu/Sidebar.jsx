import { Link, useNavigate } from "react-router-dom";
import './Sidebar.css';
import logo from '../../assets/images/system-logo_24_x_24.png';
import perfil from '../../assets/images/perfil_blz.jpg'
import UsuarioService from "../../services/UsuarioService";
import useForm from "../../hooks/useForm";

const Sidebar = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

    const navigate = useNavigate();

    console.log(user)

    const logout = () => {
        UsuarioService.logout();
        navigate("/");
    }

    const editar = (id) => {
        navigate(`/usuarioperfil/` + id)
    }

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: "",
        statusUsuario: "",
        foto: null
    };

    const { mudar, valores, setAll, mudarDireto } = useForm(objectValues)

    return (
        <>
            {currentUser ?
                <div className="flex flex-col items-center gap-4 mt-20 // md:justify-between md:px-10">

                    <form onSubmit={logout} className="flex flex-col gap-4">

                        <div className="flex justify-center items-center flex-col text-center bg-3d py-12 px-24 rounded-3xl gap-6 border-solid border-borda border-2">

                                <img src={currentUser.fotoId ? `http://localhost:8080/arquivo/${currentUser.fotoId}` : perfil} alt="logo" className="mt-2 w-60 h-44 border-solid border-borda border-2 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(53,224,105,0.15)]" />

                                <span className="text-white font-bold text-lg bg-borda py-2 w-full rounded-xl ">{currentUser.nome}</span>

                        </div>

                        <div className="flex flex-row justify-center items-center gap-3">

                            <button className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
                                <i className="bi bi-box-arrow-left // text-white"></i> Sair
                            </button>

                            <button type="button" onClick={() => editar(currentUser.id)}
                                className="bg-primaryColor py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-hover-check hover:border-l-bg-footer hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
                                Perfil <i className="bi bi-person-gear"></i>
                            </button>

                        </div>

                    </form>

                    <nav className="flex flex-row justify-center flex-wrap items-center ">
                        <Link className="underline mx-3 font-bold text-3d text-lg" aria-current="page" to={'/home'}>Home</Link>
                        {user.nivelAcesso === "ADMIN" && <Link className="underline mx-3 font-bold text-3d text-lg" to={'/mensagem'}>Mensagens</Link>}
                        {user.nivelAcesso === "USER" && <Link className="underline mx-3 font-bold text-3d text-lg" to={'/mensagem'}>Minhas Mensagens</Link>}
                        {user.nivelAcesso === "ADMIN" && <Link className="underline mx-3 font-bold text-3d text-lg" to={'/usuario'}>Usuário</Link>}
                        <Link className="underline mx-3 font-bold text-3d text-lg" to={'/meustreinos'}>Meus Treinos</Link>
                        {user.nivelAcesso === "ADMIN" && <Link className="underline mx-3 font-bold text-3d text-lg" to={'/exerciciosform'}>Exercicios Formulário</Link>}
                    </nav>
                </div> :
                <></>
            }
        </>
    )
} 

export default Sidebar

// import { Link, useNavigate } from "react-router-dom";
// import './Sidebar.css';
// import logo from '../../assets/images/system-logo_24_x_24.png';
// import perfil from '../../assets/images/perfil_blz.jpg'
// import UsuarioService from "../../services/UsuarioService";

// const Sidebar = () => {

//     const currentUser = UsuarioService.getCurrentUser();

//     const navigate = useNavigate();

//     const logout = () => {
//         UsuarioService.logout();
//         navigate("/");
//     }

//     const editar = (id) => {
//         navigate(`/usuarioperfil/` + id)
//     }

//     return (
//         <>
//             {currentUser ?
//                 <div className="sidebar">
//                     <form onSubmit={logout} className="d-flex flex-column justify-content-around align-items-center m-1 py-2 border-bottom rounded">
//                         <img src={currentUser.foto ? currentUser.foto : perfil} alt="logo" className="mt-2 w-25" />
//                         <div className="my-2">
//                             <span className="fw-bold fst-italic">{currentUser.nome}</span>
//                         </div>
//                         <div>
//                             <button className="btn btn-sm btn-warning py-1 px-2 mx-1 fw-bold h5 text-danger rounded shadow">
//                                 <i className="bi bi-box-arrow-left"></i> Sair
//                             </button>
//                             <button type="button" onClick={() => editar(currentUser.id)}
//                                 className="btn btn-sm btn-success py-1 px-2 mx-1 fw-bold h5 rounded shadow ">
//                                 Abrir <i className="bi bi-person-gear"></i>
//                             </button>
//                         </div>
//                     </form>

//                     <nav className="nav flex-column">
//                         <Link className="nav-link" aria-current="page" to={'/home'}>Dashboard</Link>
//                         <Link className="nav-link" to={'/mensagem'}>Mensagem</Link>
//                         <Link className="nav-link" to={'/usuario'}>Usuário</Link>
//                     </nav>
//                 </div> :
//                 <></>
//             }
//         </>
//     )
// }

// export default Sidebar