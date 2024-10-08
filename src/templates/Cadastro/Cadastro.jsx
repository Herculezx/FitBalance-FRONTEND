import React, { useEffect } from 'react'

import Menu from '../../components/Menu/Menu'
import Footer from "../../components/Footer/Footer"

import logoG from '../../assets/images/fitLogoG.jpg'

import styles from '../Cadastro/Cadastro.module.css'
import useForm from '../../hooks/useForm'
import useEnviar from '../../hooks/useEnviar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive'
import MenuResponsive from '../../components/MenuResponsive/MenuResponsive'
import useRequisitar from '../../hooks/useRequisitar'

const Cadastro = () => {
    const navigate = useNavigate();

    const { mudar, valores, mudarDireto } = useForm({
        imagem: undefined,
        nome: "",
        senha: "",
        email: "",
        dataNascimento: new Date(Date.now())
    })


    const { requisitar } = useEnviar(() => {
        navigate("/login")
        console.log("recebido")
    })

    console.log(valores)
    function salvarFoto(e) {
        const file = e.target?.files[0] ?? ""
        const reader = new FileReader()

        reader.onload = (event) => {
            console.table(file.name.split(".").pop())
            mudarDireto("imagem", event.target?.result)
        }
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    console.log(valores)

    return (
        <div>

            <MenuResponsive />

            <section>

                <div >

                    <div >
                        <h2>Crie sua conta!</h2>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        requisitar("usuario/create", valores)
                    }}>

                        <div>
                            <img
                                src={valores.imagem}

                                alt="" />
                            <label htmlFor="foto">Selecione Sua Imagem</label>
                            <input onChange={salvarFoto} accept='image/*' type="file" id='foto' className='hidden' />

                        </div>
                        <div>
                            <label htmlFor="nome" >Nome:</label>
                            <input onChange={mudar("nome")} type="text" id="nome" className={styles.input} placeholder="Seu Nome" name="nome" required />
                        </div>

                        <div>
                            <label htmlFor="email" >Email:</label>
                            <input onChange={mudar("email")} type="email" id="email" className={styles.input} placeholder="exemplo@gmail.com" name="email" required />
                        </div>

                        <div>
                            <label htmlFor="password" >Senha:</label>
                            <input onChange={mudar("senha")} type="password" id="password" className={styles.input} placeholder="******" name="senha" required />
                        </div>

                        <div>
                            <label htmlFor="data">Data de Nascimento</label>
                            <input onChange={mudar("dataNascimento")} type="date" name="data" id="data" className={styles.input} required />
                        </div>

                        <div>
                            <button type="submit"> Confirmar </button>
                            <a href={'/login'}><span>Já possui uma?</span> Entre agora! </a>
                        </div>


                    </form>

                </div>

            </section>

            <FooterResponsive />

        </div>
    )
}

export default Cadastro