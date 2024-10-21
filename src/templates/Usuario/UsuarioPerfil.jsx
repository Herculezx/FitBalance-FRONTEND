import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import perfil from '../../assets/images/perfil_blz.jpg'
import { useEffect, useRef, useState } from "react"
import UsuarioService from "../../services/UsuarioService"
import './Usuario.css';
import useRequisitar from "../../hooks/useRequisitar"

import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"
import useForm from "../../hooks/useForm"
import useEnviar from "../../hooks/useEnviar"
import obterArquivoPorId from "../../services/obterArquivoPorId"

const UsuarioPerfil = () => {

    const navigate = useNavigate();

    const objectValues = {
        id: null,
        nome: "",
        email: "",
        nivelAcesso: "",
        dataNascimento: "",
        statusUsuario: "",
        fotoId: 0,
        foto: { conteudo: [], extensao: "" },
    };

    const { mudar, valores, setAll, mudarDireto } = useForm(objectValues)
    const [usuario, setUsuario] = useState(objectValues);

    const [imagem, setImagem] = useState("");

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            if (usuario && usuario.fotoId) {
                const arquivo = await obterArquivoPorId(usuario.fotoId)
                setImagem(arquivo.base64)
                mudar("foto", { id: arquivo.id, conteudo: arquivo.id, extensao: arquivo.extensao })
            }
        })()

    }, [usuario])


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
                mudar("fotoId", 0)
            }
        }
        if (file) {
            reader.readAsDataURL(file)

        }
    }


    const { requisitar } = useEnviar((dados) => {
        if (dados.id == usuario.id) {
            console.log(dados)
            localStorage.setItem("user", JSON.stringify(dados))
        }
        navigate('/home')
    })

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
        <div className="">
            <div className="w-100">
                <section >
                    <MenuResponsive />
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center my-10 gap-4">
                            <button type="button" onClick={() => {
                                navigate(-1)
                            }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
                                <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                            </button>
                            <h1 className="font-bold text-4xl">
                                Suas informações
                            </h1>
                        </div>

                        <section className="w-full lg:flex lg:justify-center">
                            <form className=" m-5 p-5 rounded-xl border-[1.5px] lg:w-4/5 shadow" onSubmit={(e) => {
                                e.preventDefault()
                                console.log({ ...usuario, ...valores })
                                console.log({ ...usuario })
                                requisitar("usuario/salvar", { ...usuario, ...valores })

                            }} >

                                <div className="flex justify-center">
                                    {imagem ? ( // Condicional para mostrar a imagem apenas se houver uma imagem
                                        <div className="flex flex-col items-center gap-5">
                                            <h1 className="font-bold text-xl text-white bg-bg-footer px-4 py-2 rounded-xl">Sua Imagem de Perfil</h1>
                                            <img
                                                src={imagem}
                                                alt=""
                                                className="w-52 h-32 lg:w-80 lg:h-52 text-center rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-1" />
                                            <label htmlFor="img" className="cursor-pointer font-bold  p-2 w-56 mb-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center border-b-2">Troque sua Imagem</label>
                                        </div>
                                    ) : (
                                        <label htmlFor="img" className="cursor-pointer font-bold  p-2 w-56 mb-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-center border-b-2">Selecione Sua Imagem</label> // Mensagem quando não há imagem
                                    )}
                                    <input onChange={salvarImagem} accept='image/*' type="file" id='img' className='hidden' />
                                </div>

                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="">
                                        <label htmlFor="inputNome" className="form-label mb-1 fw-bold">Nome:</label>
                                        <input type="text" className="form-control" id="inputNome" onChange={mudar("nome")}
                                            defaultValue={usuario.nome} />
                                    </div>

                                    <div className="">
                                        <label htmlFor="inputEmail4" className="form-label mb-1 fw-bold">Email:</label>
                                        <input type="email" className="form-control" id="inputEmail4" onChange={mudar("email")}
                                            defaultValue={usuario.email} />
                                    </div>

                                    <div>
                                        <label htmlFor="dataNasc" className="form-label mb-1 fw-bold">Data de Nascimento:</label>
                                        <input type="date" className="form-control" name="dataNasc" id="dataNasc" onChange={mudar("dataNascimento")} defaultValue={valores.dataNascimento} />
                                    </div>
                                </div>

                                <div className='pb-5 pt-4 flex flex-col gap-4 justify-center items-center'>
                                    <button type="submit"
                                        className="btn btn-md btn-light text-borda text-lg font-bold px-8 duration-200 border-primaryColor border-2 border-solid ">
                                        <i className="bi bi-envelope-open me-2"></i>Salvar
                                    </button>
                                    <div>
                                        <a href={'/forgotpass'} className="font-bold text-md underline md:text-xl">Quer Mudar Sua Senha?</a>
                                    </div>
                                </div>

                                <div className=" mb-2 d-flex justify-content-between">
                                </div>
                            </form>
                        </section>


                        {/* <form className="bg-primaryColor mt-10 flex flex-col items-center justify-center p-5 rounded-3xl // sm:w-3/5 //  // // lg:w-4/5 lg:flex-row lg:gap-10 // xl:gap-48">

                                <div className="flex items-center justify-center flex-col">
                                    <button type="button" onClick={() => {
                                        navigate(-1)
                                    }} className="btn btn-sm bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white">
                                        <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                                    </button>
                                </div>
                                <div>
                                    <img
                                        src={imagem}
                                        className="w-96"
                                        alt="" />
                                    <label htmlFor="img">Selecione Sua Imagem</label>
                                    <input onChange={salvarImagem} accept='image/*' type="file" id='img' className='hidden' />
                                </div>

                                <div className="lg:flex-wrap">
                                    <div>
                                        <label htmlFor="inputNome" className="text-white font-bold text-xl //">Nome:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputNome" defaultValue={valores.nome} />
                                    </div>
                                    <div>
                                        <label htmlFor="inputEmail4" className="text-white font-bold text-xl //">Email:</label>
                                        <input type="email" className="form-control border-solid border-2 border-3d // md:px-20" id="inputEmail4" readOnly
                                            defaultValue={usuario.email} />
                                    </div>

                                    <div>
                                        <label htmlFor="inputnivelAcesso" className="text-white font-bold text-xl //">Nível de Acesso:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputnivelAcesso" readOnly
                                            defaultValue={usuario.nivelAcesso} />
                                    </div>
                                    <div>
                                        <label htmlFor="inputStatus" className="text-white font-bold text-xl //">Status:</label>
                                        <input type="text" className="form-control border-solid border-2 border-3d // md:px-20 " id="inputStatus" readOnly
                                            defaultValue={usuario.statusUsuario} />
                                    </div>
                                </div>


                                <div className="flex flex-col gap-3 mt-5">
                                    <button type="submit" className="btn bg-3d text-white shadow hover:bg-bg-footer duration-150">
                                        Gravar Alterações
                                    </button>

                                    <button type="button" className="btn bg-3d text-white shadow hover:bg-bg-footer duration-150">
                                        Alterar a Senha
                                    </button>
                                </div>
                            </form> */}
                    </div>
                    <FooterResponsive />

                </section>
            </div >
        </div >
    )
}

export default UsuarioPerfil