import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import useForm from "../../hooks/useForm"
import useRequisitar from "../../hooks/useRequisitar"
import useEnviar from "../../hooks/useEnviar"
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"

const UsuarioNovo = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const currentUser = UsuarioService.getCurrentUser();

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
        <div>
            <MenuResponsive />

            <div className="mt-10 flex flex-col lg:flex-row justify-evenly items-center">
                <div className="flex flex-col gap-5 items-center justify-center shadow-sm py-5 rounded-xl sm:w-4/5 ">
                    <div className="flex flex-col items-center font-bold text-2xl gap-4 w-4/5">
                        <h2 className="text-xl text-center text-wrap bg-3d rounded-3xl p-2 text-bd">Cadastre o Novo usuario, <span className="text-primaryColor underline"> {currentUser.nome} !</span> </h2>
                    </div>
                    <section className="w-4/5">

                        <form
                            className="flex flex-col gap-4 shadow p-4 rounded-xl"
                            onSubmit={(e) => {
                                e.preventDefault()
                                requisitar("usuario/create", valores)
                            }}>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="nome" className="font-bold text-xl">Nome:</label>
                                <input
                                    className="form-control text-center fw-medium shadow"
                                    onChange={mudar("nome")} type="text" id="nome" placeholder="Nome do Usuário" name="nome" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-bold text-xl">Email:</label>
                                <input
                                    className="form-control text-center fw-medium shadow"
                                    onChange={mudar("email")} type="email" id="email" placeholder="exemplo@gmail.com" name="email" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="font-bold text-xl">Senha:</label>
                                <input
                                    className="form-control text-center fw-medium shadow"
                                    onChange={mudar("senha")} type="password" id="password" placeholder="******" name="senha" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="data" className="font-bold text-xl">Data de Nascimento</label>
                                <input
                                    className="form-control text-center fw-medium shadow"
                                    onChange={mudar("dataNascimento")} type="date" name="data" id="data" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="inputAcesso" className="font-bold text-xl">Acesso:</label>
                                <select id="inputAcesso" className="form-select text-center fw-medium shadow" name="nivelAcesso"
                                    defaultValue={''} onChange={mudar("nivelAcesso")}>

                                    <option value={''} disabled>
                                        Nível de Acesso...
                                    </option>
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>

                            <div className="flex flex-col items-center gap-4 mt-4 justify-evenly">
                                <button type="submit"
                                    className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                > Confirmar </button>
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
            <Sidebar />
            <FooterResponsive />

        </div>
    )
}

export default UsuarioNovo