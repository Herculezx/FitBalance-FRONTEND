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
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    {user.nivelAcesso === "ADMIN" && <th scope="col">ID</th>}
                                    <th scope="col">Data</th>
                                    <th scope="col">Emissor</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensagens?.map((mensagem) => (
                                    <tr key={mensagem.id}>
                                        {user.nivelAcesso === "ADMIN" && <td scope="row">{mensagem.id}</td>}
                                        <td>{mensagem.dataMensagem}</td>
                                        <td>{mensagem.emissorMensagem}</td>
                                        <td>{mensagem.email}</td>
                                        <td>{mensagem.statusMensagem}</td>
                                        <td>
                                            <button type="button" onClick={() => lerMensagem(mensagem.id)}
                                                className="btn btn-sm btn-warning">
                                                <i className="bi bi-envelope-open me-2"></i>Abrir
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