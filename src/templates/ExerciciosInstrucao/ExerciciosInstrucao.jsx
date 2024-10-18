import React from 'react'
import { useReducer } from 'react'
import useRequisitar, { backendUrl } from '../../hooks/useRequisitar'
import { useParams, useSearchParams } from 'react-router-dom'

export const ExerciciosInstrucao = () => {
    const {id} = useParams()
    const {dados} = useRequisitar(`exercicios/findById/${id}`)
    console.log(dados)
  return (
    <div>
        <h1>{dados?.nivel}</h1>
        <h1>{dados?.nome}</h1>
        <p>{dados?.serie}</p>
        <p>{dados?.repeticoes}</p>
        <img src={backendUrl + "arquivo/" + dados?.imagemId} alt="" />
        <video controls src={backendUrl + "arquivo/" + dados?.videoId}></video>
        <p>{dados?.instrucoes}</p>
    </div>
  )
}
