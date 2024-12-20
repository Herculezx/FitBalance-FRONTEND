import React from 'react'
import { useReducer } from 'react'
import useRequisitar, { backendUrl } from '../../hooks/useRequisitar'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive'
import MenuResponsive from '../../components/MenuResponsive/MenuResponsive'
import ButtonReUse from '../../components/BUTTONS/ButtonReUse'

export const ExerciciosInstrucao = () => {
  const { id } = useParams()
  const { dados } = useRequisitar(`exercicios/findById/${id}`)
  console.log(dados)
  const navigate = useNavigate();
  return (
    <div>
      <MenuResponsive />
      <div className='flex gap-5 items-center justify-evenly w-full my-5'>

        <div className='flex flex-col gap-5 justify-center items-center'>
          <div className='w-full flex justify-center'>
            <ButtonReUse
              nameBtn="Voltar"
              link={'/meustreinos'}
            />
          </div>
          <div className='text-center'>
            <h1 className='bg-3d text-bd rounded-xl p-2 font-bold text-2xl '>Instruções Do {dados?.nome} </h1>
          </div>
        </div>

      </div>
      <section className='w-full flex flex-col items-center justify-evenly'>
        <div className='shadow-2xl rounded-3xl w-3/4 flex flex-col items-center gap-4 py-5'>
          <h1 className='font-medium text-xl'><span className='font-bold text-2xl'>Nivel: </span>{dados?.nivel}</h1>
          <h1 className='font-medium text-xl'><span className='font-bold text-2xl'>Nome: </span>{dados?.nome}</h1>
          <p className='font-medium text-xl'><span className='font-bold text-2xl'>Séries: </span>{dados?.serie}</p>
          <p className='font-medium text-xl'><span className='font-bold text-2xl'>Repeticões ou Segundos: </span>{dados?.repeticoes}</p>
          <img className='w-72 h-52 border-[1.5px] shadow rounded-xl' src={backendUrl + "arquivo/" + dados?.imagemId} alt="" />
          <video autoPlay className='w-72 h-52 md:w-1/2 md:h-1/2  rounded-xl' controls src={backendUrl + "arquivo/" + dados?.videoId}></video>
          <p className='text-md mx-3 md:px-72 text-center font-semibold'>{dados?.instrucoes}</p>
        </div>
      </section>
      <FooterResponsive />
    </div>
  )
}
