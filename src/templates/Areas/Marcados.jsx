import React from 'react'
import Exercicios from './Exercicios';
import useRequisitar from '../../hooks/useRequisitar';
import { useNavigate } from 'react-router-dom';

const Marcados = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson || '{}');
    const {dados: usuario} = useRequisitar("usuario/findByEmail/?email="+ user.email)
    const navigate = useNavigate()
  return (
    <div>
        {usuario?.exercicios.map(Exercicios => <h1 onClick={() =>navigate(`/exerciciosInstrucoes/${Exercicios.id}`)}>{Exercicios.nome}</h1>)}
    </div>
  )
}

export default Marcados