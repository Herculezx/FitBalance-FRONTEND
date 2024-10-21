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
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-50 border border-gray-200">
                            <thead>
                                <tr className="bg-hover-check text-white text-center">
                                    <th className="px-5 py-3 border-b">ID</th>
                                    <th className="px-5 py-3 border-b">Nome</th>
                                    <th className="px-5 py-3 border-b">Email</th>
                                    <th className="px-5 py-3 border-b">Acesso</th>
                                    <th className="px-5 py-3 border-b">Data de Nascimento</th>
                                    <th className="px-5 py-3 border-b">Status</th>
                                    <th className="px-5 py-3 border-b">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios?.map((usuario, index) => (
                                    <tr key={usuario.id} className={`hover:bg-tr text-center transition duration-150 ease-in-out ${index % 2 === 0 ? 'bg-bd' : 'bg-gray-300'}`}>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.id}</td>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.nome}</td>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.email}</td>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.nivelAcesso}</td>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.dataNascimento}</td>
                                        <td className="px-5 py-4 border-b border font-semibold">{usuario.statusUsuario}</td>
                                        <td>
                                            <button onClick={() => editar(usuario.id)}
                                                className="bg-green-500 border-[1.5px] font-bold border-bg-footer text-white px-4 py-2 rounded-xl hover:bg-hover-check transition duration-300 ease-in-out">
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