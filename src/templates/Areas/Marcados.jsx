import React, { useState } from 'react'
import Exercicios from './Exercicios';
import useRequisitar from '../../hooks/useRequisitar';
import { useNavigate } from 'react-router-dom';
import MenuResponsive from '../../components/MenuResponsive/MenuResponsive';
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive';
import UsuarioService from '../../services/UsuarioService';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importando os ícones
import CardExercicios from '../../components/CardExercicios/CardExercicios';

const Marcados = () => {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson || '{}');
  const currentUser = UsuarioService.getCurrentUser();

  const { dados: usuario } = useRequisitar("usuario/findByEmail/?email=" + user.email)
  const navigate = useNavigate()
  return (
    <div>
      <MenuResponsive />

      <section className='flex flex-col items-center mt-10'>
        <div className=''>
          <h1 className='flex flex-col md:flex-row items-center justify-center gap-4 font-bold text-2xl my-10'>
            Seus Exercícios Salvos <span >{user.nivelAcesso === "ADMIN" ? <h1 className='bg-primaryColor p-2 rounded-xl text-white underline'> Moderador {currentUser.nome} </h1> : <h1 className='bg-3d p-2 rounded-xl text-white underline'>{currentUser.nome}</h1>}</span>
          </h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 bg-3d text-white p-4 h-auto rounded-xl'>
          {usuario?.exercicios.map(Exercicios => <div className='flex flex-row items-center gap-2 '>
            <input className='h-7 w-7 lg:h-7 lg:w-7 appearance-none rounded-md border-borda border-2 checked:border-hover checked:bg-[#01ad64] hover:bg-[#80ecbe] hover:border-primaryColor duration-300' type='checkbox' />
            <a className='flex justify-between items-center gap-3 cursor-pointer border-b border-white rounded-sm' onClick={() => navigate(`/exerciciosInstrucoes/${Exercicios.id}`)}>{Exercicios.nome} <FaChevronDown className="mr-2" /></a>
          </div>)}
        </div>
      </section>

      <FooterResponsive />
    </div>
  )
}

export default Marcados