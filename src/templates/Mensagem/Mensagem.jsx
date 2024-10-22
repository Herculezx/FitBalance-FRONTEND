import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useState } from "react"
import MensagemService from "../../services/MensagemService"
import UsuarioService from "../../services/UsuarioService"
import useRequisitar from "../../hooks/useRequisitar"
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"

const Mensagem = () => {
    const navigate = useNavigate();
    const { carregando, dados: mensagens } = useRequisitar("mensagem/findAll")
    console.log(mensagens)
    const lerMensagem = (id) => {
        navigate(`/mensagemler/` + id)
    }

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

    return (
        <div className="">
            <MenuResponsive />
            <div className="">

                <section className="p-2 m-2 shadow-lg">
                    <div className="border-b-2 border-b-borda flex justify-between px-20 py-3">
                        <div>
                            <button type="button" onClick={() => {
                                navigate('/home')
                            }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
                                <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                            </button>
                        </div>
                        <div className="">
                            {currentUser ?
                                <span className="text-white font-bold text-lg bg-primaryColor px-4 py-2 rounded-2xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">{currentUser.nome}</span>
                                : <></>
                            }
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-50 border border-gray-200">
                            <thead>
                                <tr className="bg-hover-check text-white text-center">
                                    {user.nivelAcesso === "ADMIN" &&
                                        <th className="px-5 py-3 border-b">ID</th>}
                                    <th className="px-5 py-3 border-b">Data</th>
                                    <th className="px-5 py-3 border-b">Emissor</th>
                                    <th className="px-5 py-3 border-b">Email</th>
                                    <th className="px-5 py-3 border-b">Status</th>
                                    <th className="px-5 py-3 border-b">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensagens?.map((mensagem, index) => (
                                    <tr
                                        key={mensagem.id}
                                        className={`hover:bg-tr text-center transition duration-150 ease-in-out ${index % 2 === 0 ? 'bg-bd' : 'bg-gray-300'}`}
                                    >
                                        {user.nivelAcesso === "ADMIN" && <td className="px-5 py-2 border-b border font-semibold">{mensagem.id}</td>}
                                        <td className="px-5 py-2 border-b border font-semibold">{mensagem.dataMensagem}</td>
                                        <td className="px-5 py-2 border-b border font-semibold">{mensagem.emissorMensagem}</td>
                                        <td className="px-5 py-2 border-b border font-semibold">{mensagem.email}</td>
                                        <td className="px-5 py-2 border-b border font-semibold">{mensagem.statusMensagem}</td>
                                        <td className="px-5 py-2 border-b border font-semibold">
                                            <button
                                                type="button"
                                                onClick={() => lerMensagem(mensagem.id)}
                                                className="bg-green-500 border-[1.5px] font-bold border-bg-footer text-white px-4 py-2 rounded-xl hover:bg-hover-check transition duration-300 ease-in-out"
                                            >
                                                <i className="bi bi-envelope-open mr-2"></i>Abrir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default Mensagem