import { useNavigate } from "react-router-dom"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importando os ícon
import { useState } from "react";
import useEnviar from "../../hooks/useEnviar";
export default (Exercicios) => {
    const navigate= useNavigate()
    const hoje = new Date()
    const { requisitar: fazer } = useEnviar();
  const { requisitar: desfazer } = useEnviar();
    const [feito, setFeito] = useState(Exercicios?.feitos?.map(feito => ({...feito, data: new Date(feito.data) })).some(feito => {
     
        return feito.data.getFullYear() == hoje.getFullYear() && feito.data.getMonth() == hoje.getMonth() && (feito.data.getDate() + 1) == hoje.getDate() 
    }))
    console.log(feito)
    return (
        <div className='flex flex-row items-center gap-2 '>
            <input checked={feito} onChange={async (e) => {
              
              if (!feito) {
                fazer("exercicios/fazer/" + Exercicios.id)
              }
              else {
                desfazer("exercicios/desfazer/" + Exercicios.id)
              }
              setFeito(!feito)
            }} className='h-7 w-7 lg:h-7 lg:w-7 appearance-none rounded-md border-borda border-2 checked:border-hover checked:bg-[#01ad64] hover:bg-[#80ecbe] hover:border-primaryColor duration-300' type='checkbox' />
            <a className='flex justify-between items-center gap-3 cursor-pointer border-b font-bold hover:px-2 duration-300 border-white rounded-sm' onClick={() => navigate(`/exerciciosInstrucoes/${Exercicios.id}`)}>{Exercicios.nome} <FaChevronDown className="mr-2" /></a>
          </div>
    )
}