import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import useForm from "../../hooks/useForm"
import useEnviar from "../../hooks/useEnviar"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"

const UsuarioEditar = () => {

    const navigate = useNavigate();

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: "",
        statusUsuario: "",
        foto: null
    };

    const { mudar, valores, setAll, mudarDireto } = useForm(objectValues)
    const [usuario, setUsuario] = useState(objectValues);
    const [successful, setSuccessful] = useState(false);

    const { requisitar } = useEnviar((dados) => {
        if (dados.id == usuario.id) {

        }
        navigate('/usuarioslista')
    })

    const { id } = useParams();

    const [imagem, setImagem] = useState("");



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

    function salvarImagem(e) {
        const file = e.target?.files[0] ?? ""
        const reader = new FileReader()

        reader.onload = (event) => {

            const extensao = file.name.split(".").pop()
            if (typeof event.target?.result == "string") {
                setImagem(event.target?.result)
                reader.readAsArrayBuffer(file)
            }
            else {
                console.log({ conteudo: Array.from(new Uint8Array(event.target?.result)) }.conteudo)
                mudarDireto("foto", { conteudo: Array.from(new Uint8Array(event.target?.result)), extensao: `image/${extensao}` })
            }
        }
        if (file) {
            reader.readAsDataURL(file)

        }
    }


    /*
        A propriedade 'value' para um campo de formulário sem um manipulador 'onChange', 
        faz com que o campo seja renderizado como somente de leitura. 
        Se o campo deve ser mutável, deve ser utilizada a propriedade 'defaultValue'. 
        Caso contrário, deve ser definida 'onChange' ou 'readOnly'.
    */
    return (
        <div className="">
            <MenuResponsive />
            <div className="p-3 w-100">
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-2 m-5 p-2 rounded-2 shadow" onSubmit={(e) => {
                        e.preventDefault()
                        console.log({ ...usuario, ...valores })
                        console.log({ ...usuario })
                        requisitar("usuario/salvar", { ...usuario, ...valores })

                    }} >

                        <div>
                            <button type="button" onClick={() => {
                                navigate('/home')
                            }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
                                <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                            </button>
                        </div>

                        <div>
                            {imagem ? ( // Condicional para mostrar a imagem apenas se houver uma imagem
                                <>
                                    <img
                                        src={imagem}
                                        alt=""
                                        className="w-96 h-80" />
                                    <label htmlFor="img">Imagem Selecionada</label>
                                </>
                            ) : (
                                <label htmlFor="img">Selecione Sua Imagem</label> // Mensagem quando não há imagem
                            )}
                            <input onChange={salvarImagem} accept='image/*' type="file" id='img' className='hidden' />
                        </div>
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
                                className="bg-3d py-2 w-2/12 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-3/12 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
                                <i className="bi bi-envelope-open me-2"></i>Salvar
                            </button>
                        </div>

                        <div className="flex justify-center">
                            <button type="button"
                                className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                onClick={() => inativarUsuario()}>
                                Inativar Conta
                            </button>

                            <button type="button"
                                className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                onClick={() => reativarUsuario()}>
                                Reativar
                            </button>
                        </div>

                        <div className="col-12 mb-2 d-flex justify-content-between">
                        </div>
                    </form>
                </section>
            </div>
            <Sidebar />
            <FooterResponsive />
        </div>
    )
}

export default UsuarioEditar