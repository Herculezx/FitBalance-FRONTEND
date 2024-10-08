import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import UsuarioService from "../../services/UsuarioService"
import { useEffect, useState } from "react"
import useRequisitar from "../../hooks/useRequisitar"
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"

const UsuariosLista = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/usuarioeditar')
    }

    const { carregando, dados: usuarios } = useRequisitar(`usuario/findAll`)

    const editar = (id) => {
        navigate(`/usuarioeditar/` + id)
    }

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

    return (
        <div className="">
            <MenuResponsive />
            <div className="flex justify-center items-center mt-10">
                {currentUser && <span className="text-white font-bold text-lg bg-primaryColor px-4 py-2 rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">{currentUser.nome}</span>}
            </div>
            <div className="mt-10">
                <section className="mx-5 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Acesso</th>
                                    <th scope="col">Data de Nascimento</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario) => (
                                    <tr className="" key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.dataNascimento}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button onClick={() => editar(usuario.id)}
                                                className="btn btn-sm btn-warning rounded">
                                                <i className="bi bi-envelope-open"> Abrir</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <Sidebar />
                <FooterResponsive />
            </div>
        </div>
    )
}

export default UsuariosLista