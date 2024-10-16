import { useState } from "react"
import MensagemService from "../../services/MensagemService"
import './FaleConosco.css'
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive"
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive"
import vetorFaleConosco from "../../assets/images/vetorFaleConosco.png"
import { useEffect } from "react"

import { useNavigation, useRoutes, useNavigate } from "react-router-dom"

const FaleConosco = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    useEffect(() => {
        setFormData({ ...formData, emissorMensagem: user.nome, email: user.email })
    }, [])
    const objectValues = {
        email: "",
        emissorMensagem: "",
        texto: "",
        telefone: ""
    };
    const navigate = useNavigate()
    const [mensagem, setMensagem] = useState(objectValues);
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
        if (formData.emissorMensagem != undefined && formData.email != undefined && formData.texto != undefined) {
            MensagemService.create(formData).then(
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
    }


    return (
        <div>
            <MenuResponsive />
            <div className=" flex justify-center w-full mt-16">
                <div className="flex items-center justify-between">
                    <form className="flex flex-col gap-5 items-center" onSubmit={handleSubmit} >
                        <h1 className="h1 text-center">Fale Conosco</h1>
                        {!successful && (
                            <>
                                <div>

                                    <div className="mb-3">
                                        <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Nome:</label>
                                        <input type="text" className="form-control w-80 px-4" id="inputEmissor" required
                                            name="emissorMensagem"
                                            value={formData.emissorMensagem || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                                        <input type="email" className="form-control w-80 px-4" id="inputEmail" required
                                            name="email"
                                            value={formData.email || ""}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputTelefone" className="form-label mb-1 fw-bold">Telefone *(opcional):</label>
                                        <input type="text" className="form-control w-80 px-4" id="inputTelefone"
                                            name="telefone"
                                            value={formData.telefone || ""}
                                            onChange={handleChange} />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label>
                                        <textarea
                                            rows={5}
                                            className="form-control w-80 px-4 resize-none"  // Adicionando a classe do Tailwind
                                            id="inputTexto"
                                            required
                                            name="texto"
                                            value={formData.texto || ""}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>

                                </div>
                                <div className="flex flex-row justify-center gap-10">
                                    <button type="button" onClick={() => {
                                        navigate(-1)
                                    }} className="btn btn-sm bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white">
                                        <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                                    </button>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </>
                        )}
                    </form>
                </div>

                {/* {message && (
                    <div className="m-1">
                        <div>
                            <button type="button" onClick={() => {
                                navigate('/home')
                            }} className="btn btn-sm20 bg-3d  mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white hover:bg-borda duration-300">
                                <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                            </button>
                        </div>
                        <div className={
                            "text-center h4 fst-italic py-4 rounded-2 border border-5 " + (successful ? "border-success" : "border-danger")
                        }>
                            {message}
                        </div>
                    </div>
                )} */}
            </div>
            <FooterResponsive />

        </div>
    )
}

export default FaleConosco