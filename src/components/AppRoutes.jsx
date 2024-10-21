import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"

import LoginForgotPass from "../templates/Login/LoginForgotPass"
import Login from "../templates/Login/Login"
import  Cadastro from "../templates/Cadastro/Cadastro"

import Areas from "../templates/Areas/Areas"

import Exercicios from "../templates/Areas/Exercicios"
import ExerciciosForm from "../templates/Areas/ExerciciosForm"

import Alimentacao from "../templates/Areas/Alimentacao"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer" 

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import LoginNewPass from "../templates/Login/LoginNewPass"
import UsuarioPerfil from "../templates/Usuario/UsuarioPerfil"
import FaleConosco from "../templates/Mensagem/FaleConosco"
import SobreNos from "../templates/SobreNos/SobreNos"

import Marcados from "../templates/Areas/Marcados"
import { useEffect } from "react"
import { useState } from "react"
import { ExerciciosInstrucao } from "../templates/ExerciciosInstrucao/ExerciciosInstrucao"

const AppRoutes = () => {
  const [bloqueado , setBloqueado] = useState(false)
  const path = useLocation().pathname
  const RotasProtegidas = ['/areas' , '/exercicios' , '/mensagem' , '/mensagemler/:id' , '/home' , '/faleconosco']
  const RotasAdmin = ['/exerciciosForm' , '/usuario' , '/usuariolista' , '/usuarionovo' , '/usuarioeditar/:id' , '/usuarioperfil/:id']
  const Navigate = useNavigate()
  const Logado = localStorage.getItem("user")
  useEffect(()=>{
   if(RotasProtegidas.includes(path) && !Logado){
      Navigate('/login')
   } 
   const user = JSON.parse(Logado)
   console.log(user)
   console.log(RotasAdmin.includes(path) && !user?.nivelAcesso == "ADMIN")
   if(RotasAdmin.includes(path) && !(user?.nivelAcesso == "ADMIN")){
    setBloqueado(true)
 }
 else{
  if(bloqueado){
    setBloqueado(false)
  }
 }
  } , [path])

  return (
    <div>
      {bloqueado ? <h1> Página não encontrada!</h1> :  <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/home" element={<Home />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/forgotpass" element={<LoginForgotPass />} />
        <Route path="/newpass/:id" element={<LoginNewPass/>} />

        <Route path="/areas"  element={<Areas />} />

        <Route path="/exerciciosInstrucoes/:id" element={<ExerciciosInstrucao />} />
        <Route path="/exerciciosform"  element={<ExerciciosForm />} />
        <Route path="/meustreinos"  element={<Marcados />} />
        <Route path="/exercicios"  element={<Exercicios />} />
        <Route path="/exercicios/editar/:id" element={<ExerciciosForm />} />

        <Route path="/alimentacao"  element={<Alimentacao />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler/:id" element={<MensagemLer />} />
        <Route path="/faleconosco" element={<FaleConosco />} />

        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />
        <Route path="/usuarioperfil/:id" element={<UsuarioPerfil />} />

        <Route path="/sobrenos" element={<SobreNos />} />

      </Routes>}
     
    </div>
  )
}
export default AppRoutes