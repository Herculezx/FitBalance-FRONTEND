import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import useForm from "../../hooks/useForm"
import useEnviar from "../../hooks/useEnviar"

const UsuarioEditar = () => {

    const navigate = useNavigate();

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: "",
        statusUsuario: ""
    };

    const { mudar, valores , setAll} = useForm(objectValues)
    const [usuario, setUsuario] = useState(objectValues);

    const { requisitar } = useEnviar((dados) => {
        if (dados.id == usuario.id) {

        }
        navigate('/usuarioslista')
    })

    const { id } = useParams();

    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        UsuarioService.inativar(id).then(
            (response) => {
                setUsuario(response.data.message);
                setSuccessful(true);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                Navigate('/usuarioslista');
            }, (error) => {
                const usuario = error.response.data.message;
                setUsuario(usuario);
            }
        )
    }



    const inativarUsuario = () => {
        setSuccessful(false);

        UsuarioService.inativar(id).then(
            (response) => {
                setUsuario(response.data.message);
                setSuccessful(true);
                navigate('/usuarioslista');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, (error) => {
                const usuario = error.response.data.message;
                setUsuario(usuario);
            }
        )
    }
    const reativarUsuario = () => {
        setSuccessful(false);

        UsuarioService.reativar(id).then(
            (response) => {
                setUsuario(response.data.message);
                setSuccessful(true);
                navigate('/usuarioslista');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }, (error) => {
                const usuario = error.response.data.message;
                setUsuario(usuario);
            }
        )
    }

    useEffect(() => {
        UsuarioService.findById(id).then(
            (response) => {
                const usuario = response.data;
                setUsuario(usuario);
                setAll(usuario)
                console.log(usuario);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);


    /*
        A propriedade 'value' para um campo de formulário sem um manipulador 'onChange', 
        faz com que o campo seja renderizado como somente de leitura. 
        Se o campo deve ser mutável, deve ser utilizada a propriedade 'defaultValue'. 
        Caso contrário, deve ser definida 'onChange' ou 'readOnly'.
    */
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={(e) => {
                        e.preventDefault()
                        console.log({...usuario , ...valores})
                        console.log({...usuario})
                        requisitar("usuario/salvar", { ...usuario, ...valores })

                    }} >
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label mb-1 fw-bold">ID:</label>
                            <input type="text" className="form-control" id="inputID" readOnly
                                defaultValue={usuario.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                            <input type="text" className="form-control" id="inputNome" onChange={mudar("nome")}
                                defaultValue={usuario.nome} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">Email:</label>
                            <input type="email" className="form-control" id="inputEmail4" onChange={mudar("email")}
                                defaultValue={usuario.email} />
                        </div>

                        <div className="col-md-4 my-3">
                            <label htmlFor="inputStatus" className="form-label mb-1 fw-bold">Status:</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly
                                defaultValue={usuario.statusUsuario} />
                        </div>
                        <div className="col-md-4 my-3">
                            <label htmlFor="inputAcesso" className="form-label mb-1 fw-bold">Acesso:</label>
                            <select id="inputAcesso" className="form-select" readOnly onChange={mudar("nivelAcesso")}
                                value={valores.nivelAcesso} >
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div className='pb-5 pt-4 flex justify-center items-center'>
                            <button type="submit"
                                className="btn btn-md btn-light text-borda text-lg font-bold px-8 duration-200 border-primaryColor border-2 border-solid ">
                                <i className="bi bi-envelope-open me-2"></i>Salvar
                            </button>
                        </div>

                        <button type="button" onClick={() => inativarUsuario()} className="btn btn-danger">
                            Inativar Conta
                        </button>

                        <button className="btn btn-warning" onClick={() => reativarUsuario()}>
                            Reativar
                        </button>

                        <div className="col-12 mb-2 d-flex justify-content-between">
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default UsuarioEditar