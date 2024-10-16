import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"
import useEnviar from "../../hooks/useEnviar"

const UsuarioNovo = () => {

    const navigate = useNavigate();

    // const [nivel, setNivel] = useState();
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const { mudar, valores } = useForm({
        nome: "",
        senha: "",
        email: "",
        dataNascimento: new Date(Date.now()),
        nivelAcesso: ""
    })

    const { requisitar } = useEnviar(() => {
        navigate("/usuarioslista")
        console.log("recebido")
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    /*
        const onChangeType = (e) => {
            console.log(e.target.value)
            setNivel(e.target.value);
        }
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        UsuarioService.create(formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                /*window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })*/
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">

                <section className="m-2 p-2 shadow-lg">

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        requisitar("usuario/create", valores)
                    }}>

                        <div>
                            <label htmlFor="nome" >Nome:</label>
                            <input onChange={mudar("nome")} type="text" id="nome" placeholder="Seu Nome" name="nome" required />
                        </div>

                        <div>
                            <label htmlFor="email" >Email:</label>
                            <input onChange={mudar("email")} type="email" id="email" placeholder="exemplo@gmail.com" name="email" required />
                        </div>

                        <div>
                            <label htmlFor="password" >Senha:</label>
                            <input onChange={mudar("senha")} type="password" id="password" placeholder="******" name="senha" required />
                        </div>

                        <div>
                            <label htmlFor="data">Data de Nascimento</label>
                            <input onChange={mudar("dataNascimento")} type="date" name="data" id="data" required />
                        </div>

                        <div className="col-md-2">
                            <label htmlFor="inputAcesso">Acesso:</label>
                            <select id="inputAcesso" className="form-select" name="nivelAcesso"
                                defaultValue={''} onChange={mudar("nivelAcesso")}>

                                <option value={''} disabled>
                                    Nível de Acesso...
                                </option>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit"> Confirmar </button>
                        </div>


                    </form>
                    {/* <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={handleSubmit}>
                        {!successful && (
                            <>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                                    <input  type="text" className="form-control" id="inputNome" 
                                            name="nome"
                                            value={formData.nome || ""}
                                            onChange={handleChange} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                                    <input  type="email" className="form-control" id="inputEmail" 
                                            name="email"
                                            value={formData.email || ""}
                                            onChange={handleChange}/>
                                </div>

                                <div className="col-md-2">
                                    <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
                                    <select id="inputAcesso" className="form-select" name="nivelAcesso"
                                        defaultValue={''} onChange={(e) => handleChange(e)}>

                                        <option value={''} disabled>
                                            Nível de Acesso...
                                        </option>
                                        <option value={"USER"}>USER</option>
                                        <option value={"ADMIN"}>ADMIN</option>
                                    </select>
                                </div>

                                <div className="col-12 my-2">
                                    <button type="submit" className="btn btn-primary">
                                        Gravar
                                    </button>
                                </div>
                            </>
                        )}
                        {message && (
                            <div className="m-1">
                                <div className={
                                    "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                                }>
                                    {message}
                                </div>
                            </div>
                        )}
                    </form> */}
                </section>
            </div>
        </div>
    )
}

export default UsuarioNovo