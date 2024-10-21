import { useState, useEffect } from "react";
import MensagemService from "../../services/MensagemService";
import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";
import vetorFaleConosco from "../../assets/images/vetorFaleConosco.png";
import { useNavigate } from "react-router-dom";
import ButtonReUse from "../../components/BUTTONS/ButtonReUse";
import { div } from "framer-motion/client";

const FaleConosco = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        emissorMensagem: "",
        texto: "",
        telefone: ""
    });
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setFormData({ ...formData, emissorMensagem: user.nome, email: user.email });
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        if (formData.emissorMensagem && formData.email && formData.texto) {
            MensagemService.create(formData).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, (error) => {
                    const errorMessage = error.response.data.message;
                    setMessage(errorMessage);
                }
            );
        }
    };

    return (
        <div>
            <MenuResponsive />
            <div className="flex justify-center w-full">
                <div className="flex items-center lg:flex-row lg:justify-between">
                    {!successful ? (
                        <>
                            <div className="flex lg:mr-32 xl:mr-52">
                                <form className="flex flex-col items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 rounded-3xl" onSubmit={handleSubmit}>
                                    <h1 className="h1 text-center">Fale Conosco</h1>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Nome:</label>
                                        <input type="text" className="form-control w-80 px-4" id="inputEmissor" required
                                            name="emissorMensagem"
                                            value={formData.emissorMensagem || ""}
                                            readOnly
                                            onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
                                        <input type="email" className="form-control w-80 px-4" id="inputEmail" required
                                            name="email"
                                            value={formData.email || ""}
                                            readOnly
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
                                            className="form-control w-80 px-4 resize-none"
                                            id="inputTexto"
                                            required
                                            name="texto"
                                            value={formData.texto || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mt-3 flex flex-row justify-center gap-10">
                                        <button type="button" onClick={() => navigate(-1)} className="btn btn-sm bg-3d mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white">
                                            <i className="bi bi-box-arrow-left // text-white"></i> Voltar
                                        </button>
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-4/5 hidden lg:flex">
                                <img src={vetorFaleConosco} className="w-[26rem]" alt="" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col lg:flex-row gap-5">

                                <div className="flex justify-center flex-col items-center">
                                    <div className="w-full flex justify-center my-5">
                                        <a href={'/home'}
                                            className="bg-3d py-2 w-1/2 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/3 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
                                        >Voltar</a>
                                    </div>
                                    <div className="flex flex-col gap-2 items-center text-center font-bold text-lg border-2 rounded-2xl shadow p-2">
                                        <h1 className="my-4">Sua Mensagem foi Enviada com Sucesso!</h1>
                                        <h5 className="my-4 text-hover font-normal underline ">Obrigado por compartilhar conosco seu FEEDBACK!</h5>
                                    </div>
                                </div>

                                <div>
                                    <img src={vetorFaleConosco} className="w-[26rem] hidden md:block" alt="" />
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
            <FooterResponsive />
        </div>
    );
};

export default FaleConosco;

// import { useState, useEffect } from "react";
// import MensagemService from "../../services/MensagemService";
// import MenuResponsive from "../../components/MenuResponsive/MenuResponsive";
// import FooterResponsive from "../../components/FooterResponsive/FooterResponsive";
// import vetorFaleConosco from "../../assets/images/vetorFaleConosco.png";
// import { useNavigate } from "react-router-dom";
// import ButtonReUse from "../../components/BUTTONS/ButtonReUse";
// import { div } from "framer-motion/client";

// const FaleConosco = () => {
//     const userJson = localStorage.getItem("user");
//     const user = JSON.parse(userJson || '{}');
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email: "",
//         emissorMensagem: "",
//         texto: "",
//         telefone: ""
//     });
//     const [successful, setSuccessful] = useState(false);
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         setFormData({ ...formData, emissorMensagem: user.nome, email: user.email });
//     }, []);

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setFormData(formData => ({ ...formData, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSuccessful(false);

//         if (formData.emissorMensagem && formData.email && formData.texto) {
//             MensagemService.create(formData).then(
//                 (response) => {
//                     setMessage(response.data.message);
//                     setSuccessful(true);
//                     window.scrollTo({ top: 0, behavior: 'smooth' });
//                 }, (error) => {
//                     const errorMessage = error.response.data.message;
//                     setMessage(errorMessage);
//                 }
//             );
//         }
//     };

//     return (
//         <div>
//             <MenuResponsive />
//             <div className="flex justify-center w-full mt-10">
//                 <div className="flex items-center lg:grid lg:grid-cols-faleConosco">
//                     {!successful ? (
//                         <>
//                             <div className="flex lg:mr-32">
//                                 <form className="flex flex-col items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 rounded-3xl" onSubmit={handleSubmit}>
//                                     <h1 className="h1 text-center">Fale Conosco</h1>
//                                     <div className="mb-3">
//                                         <label htmlFor="inputEmissor" className="form-label mb-1 fw-bold">Nome:</label>
//                                         <input type="text" className="form-control w-80 px-4" id="inputEmissor" required
//                                             name="emissorMensagem"
//                                             value={formData.emissorMensagem || ""}
//                                             readOnly
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="inputEmail" className="form-label mb-1 fw-bold">Email:</label>
//                                         <input type="email" className="form-control w-80 px-4" id="inputEmail" required
//                                             name="email"
//                                             value={formData.email || ""}
//                                             readOnly
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="inputTelefone" className="form-label mb-1 fw-bold">Telefone *(opcional):</label>
//                                         <input type="text" className="form-control w-80 px-4" id="inputTelefone"
//                                             name="telefone"
//                                             value={formData.telefone || ""}
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-1">
//                                         <label htmlFor="inputTexto" className="form-label mb-1 fw-bold">Mensagem:</label>
//                                         <textarea
//                                             rows={5}
//                                             className="form-control w-80 px-4 resize-none"
//                                             id="inputTexto"
//                                             required
//                                             name="texto"
//                                             value={formData.texto || ""}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                     <div className="flex flex-row justify-center gap-10">
//                                         <button type="button" onClick={() => navigate(-1)} className="btn btn-sm bg-3d mx-1 fw-bold rounded shadow flex justify-center items-center gap-2 text-md text-white">
//                                             <i className="bi bi-box-arrow-left // text-white"></i> Voltar
//                                         </button>
//                                         <button type="submit" className="btn btn-primary">Enviar</button>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="w-4/5 hidden lg:flex">
//                                 <img src={vetorFaleConosco} className="w-[26rem]" alt="" />
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <div>

//                                 <div className="flex justify-center flex-col items-center">
//                                     <div className="w-full flex justify-center my-5">
//                                         <a href={'/home'}
//                                             className="bg-3d py-2 w-1/2 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/3 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white"
//                                         >Voltar</a>
//                                     </div>
//                                     <div className="flex flex-col gap-2 items-center text-center font-bold text-lg border-2 rounded-2xl shadow p-2">
//                                         <h1 className="my-4">Sua Mensagem foi Enviada com Sucesso!</h1>
//                                         <h5 className="my-4 text-hover font-normal underline ">Obrigado por compartilhar conosco seu FEEDBACK!</h5>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <img src={vetorFaleConosco} className="w-[26rem]" alt="" />
//                                 </div>

//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <FooterResponsive />
//         </div>
//     );
// };

// export default FaleConosco;
