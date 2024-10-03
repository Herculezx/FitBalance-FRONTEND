import React from 'react'
import { useReducer } from 'react'
import useRequisitar from '../../hooks/useRequisitar'
import { useParams, useSearchParams } from 'react-router-dom'

export const ExerciciosInstrucao = () => {
    const {id} = useParams()
    const {dados} = useRequisitar(`exercicios/findById/${id}`)
    console.log(id)
  return (
    <div>
        <h1>{dados?.nivel}</h1>
        <h1>{dados?.nome}</h1>
        <p>{dados?.serie}</p>
        <p>{dados?.repeticoes}</p>
        <img src={dados?.imagem} alt="" />
        <video controls src={dados?.video}></video>
        <p>{dados?.instrucoes}</p>
    </div>
  )
}
