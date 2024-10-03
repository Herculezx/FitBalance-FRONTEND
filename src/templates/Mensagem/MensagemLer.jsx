import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect } from "react"
import { useState } from "react"
import MensagemService from "../../services/MensagemService"
import useRequisitar from "../../hooks/useRequisitar"
import UsuarioService from "../../services/UsuarioService"
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"

const MensagemLer = () => {

    const Navigate = useNavigate();

    const { id } = useParams();

    const objectValues = {
        id: null,
        dataMensagem: "",
        email: "",
        emissorMensagem: "",
        texto: "",
        telefone: "",
        statusMensagem: ""
    };

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();
    const { carregando, dados: mensagem } = useRequisitar(`mensagem/findById/${id}`)

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

    console.log(carregando)
    console.table(mensagem)
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        MensagemService.inativar(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    const marcarComoLida = () => {
        setSuccessful(false);

        MensagemService.marcarComoLida(id).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }


    return (
        <div className="">
            <MenuResponsive />
            <div className="">
                {carregando ? <h1>carregando</h1> : <section className="m-2 p-2 shadow-lg">
                    <button type="button" onClick={() => {
                        navigate(-1)
                    }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
                        <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                    </button>

                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        <div className="col-md-2 mb-2">
                            <label htmlFor="id" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control" id="id" name="id" readOnly
                                value={mensagem.id || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputData" className="form-label mb-1 fw-bold">Data:</label>
                            <input type="text" className="form-control text-center" id="inputData" readOnly
                                value={mensagem.dataMensagem || ''} />
                        </div>
                        <div className="col-md-5 mb-2">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control text-center" id="inputStatus" readOnly
                                value={mensagem.statusMensagem || ''} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Emissor:</label>
                            <input type="text" className="form-control" id="inputEmissor" readOnly
                                value={mensagem.emissorMensagem || ''} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control" id="inputEmail" readOnly
                                value={mensagem.email || ''} />
                        </div>

                        <div className="col-md-12 my-4">
                            <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label>
                            <textarea rows={5} className="form-control" id="inputTexto" readOnly
                                value={mensagem.texto || ''} >

                            </textarea>
                        </div>

                        <div className="col-12 mb-3 d-flex justify-content-around">
                            <button type="button" className="btn btn-warning"
                                onClick={() => marcarComoLida()}>
                                Marcar com Lida
                            </button>
                            <button type="submit" className="btn btn-danger">
                                Inativar
                            </button>
                        </div>
                    </form>
                </section>
                }
                <Sidebar />

            </div>
        </div>
    )
}

export default MensagemLer