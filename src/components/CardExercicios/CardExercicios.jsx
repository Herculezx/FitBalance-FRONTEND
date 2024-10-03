import React from 'react'
import { Link } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';

const CardExercicios = ({ marcados, Exercicios, setMarcados }) => {

    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    return (
        <li key={Exercicios.id} className='flex flex-col items-center border-borda border-2 rounded-2xl my-4 py-3'>
            <span className='flex flex-row gap-3 font-bold my-2 items-center'>
                {Exercicios.nome} - {Exercicios.serie} Séries De {Exercicios.repeticoes} Repetições
                <input className='h-5 w-5 appearance-none rounded-md border-borda border-2 checked:border-hover checked:bg-[#01ad64] hover:bg-[#80ecbe] hover:border-primaryColor duration-300' type='checkbox' onChange={() => marcados.some((exercicio) => Exercicios.id == exercicio.id) ? setMarcados(marcados.filter((exercicio) => Exercicios.id != exercicio.id)) : setMarcados([...marcados, Exercicios])} checked={marcados.some((exercicio) => Exercicios.id == exercicio.id)} />
            </span>
            <img src={Exercicios.imagem} alt="" className='w-[12rem] rounded-xl border-borda border' />
            {user.nivelAcesso == "ADMIN" && <Link to={`/exercicios/editar/${Exercicios.id}`}>Editar</Link>}
        </li>
    )
}

export default CardExercicios