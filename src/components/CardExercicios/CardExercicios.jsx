import React from 'react'
import { Link } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';

const CardExercicios = ({ marcados, Exercicios, setMarcados }) => {

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    return (
        <li key={Exercicios.id} className='flex flex-col items-center justify-center gap-4 w-[30rem] h-[22rem] border-borda border-[1px] rounded-[80px]'>
            <span className='flex flex-row gap-3 font-bold my-2 items-center'>
                {Exercicios.nome} - {Exercicios.serie} Séries De {Exercicios.repeticoes} 
                <input className='h-5 w-5 appearance-none rounded-md border-borda border-2 checked:border-hover checked:bg-[#01ad64] hover:bg-[#80ecbe] hover:border-primaryColor duration-300' type='checkbox' onChange={() => marcados.some((exercicio) => Exercicios.id == exercicio.id) ? setMarcados(marcados.filter((exercicio) => Exercicios.id != exercicio.id)) : setMarcados([...marcados, Exercicios])} checked={marcados.some((exercicio) => Exercicios.id == exercicio.id)} />
            </span>
            <img src={Exercicios.imagem} alt="" className='w-[12rem] h-40 rounded-xl border-borda border' />
            {user.nivelAcesso == "ADMIN" && <Link to={`/exercicios/editar/${Exercicios.id}`} className='bg-3d hover:bg-bg-footer duration-300 py-2 px-4 text-white font-bold rounded-xl'>Editar</Link>}
        </li>
    )
}

export default CardExercicios