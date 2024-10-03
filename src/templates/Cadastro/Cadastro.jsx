import React from 'react'

import Menu from '../../components/Menu/Menu'
import Footer from "../../components/Footer/Footer"

import logoG from '../../assets/images/fitLogoG.jpg'

import styles from '../Cadastro/Cadastro.module.css'
import useForm from '../../hooks/useForm'
import useEnviar from '../../hooks/useEnviar'
import { Link , useNavigate } from 'react-router-dom'

const Cadastro = () => {
    const navigate = useNavigate();

    const { mudar, valores } = useForm({
        nome: "" ,
        senha: "" ,
        email: "" ,
        dataNascimento: new Date(Date.now())
    })

    const {requisitar} = useEnviar(() => {
        navigate("/login")
        console.log("recebido")
    })

    console.log(valores)

    return (
        <div>

            <Menu />

            <section className={styles.mainSection}>
                <div className={styles.divLogo}>
                    <img src={logoG} />
                </div>

                <div className={styles.divCont}>

                    <div className={styles.divTitleLogin}>
                        <h2>Crie sua conta!</h2>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        requisitar("usuario/create", valores)
                    }}>

                        <div className={styles.divInp}>
                            <label htmlFor="nome" >Nome:</label>
                            <input onChange={mudar("nome")} type="text" id="nome" className={styles.input} placeholder="Seu Nome" name="nome"  required/>
                        </div>

                        <div className={styles.divInp}>
                            <label htmlFor="email" >Email:</label>
                            <input onChange={mudar("email")} type="email" id="email" className={styles.input} placeholder="exemplo@gmail.com" name="email"  required/>
                        </div>

                        <div className={styles.divInp}>
                            <label htmlFor="password" >Senha:</label>
                            <input onChange={mudar("senha")} type="password" id="password" className={styles.input} placeholder="******" name="senha"  required/>
                        </div>

                        <div className={styles.divInp}>
                            <label htmlFor="data">Data de Nascimento</label>
                            <input onChange={mudar("dataNascimento")} type="date" name="data" id="data" className={styles.input} required/>
                        </div>

                        <div className={styles.divBtn}>
                            <button type="submit"> Confirmar </button>
                            <a href={'/login'}><span>Já possui uma?</span> Entre agora! </a>
                        </div>


                    </form>

                </div>

            </section>

            <Footer />

        </div>
    )
}

export default Cadastro