import React from 'react'
import useForm from '../../hooks/useForm'
import useEnviar from '../../hooks/useEnviar'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import MenuResponsive from '../../components/MenuResponsive/MenuResponsive'
import FooterResponsive from '../../components/FooterResponsive/FooterResponsive'
import { useState } from 'react'
import useRequisitar from '../../hooks/useRequisitar'
import { useEffect } from 'react'

const ExerciciosForm = () => {
  const navigate = useNavigate();
  const { mudar, valores, mudarDireto, setAll } = useForm({ id: 0, nome: "", nivel: "iniciante", serie: 2, repeticoes: 10, instrucoes: "" , video: undefined , imagem: undefined})
  const { requisitar } = useEnviar(() => {
    navigate('/exercicios')
  })
  
  const {id} = useParams()
    const {dados} = useRequisitar(`exercicios/findById/${id}`, [id])
    useEffect(() => {
      if (dados) setAll(dados)
    }, [dados])
  console.log(valores)
  
  function salvarImagem(e){
    const file = e.target?.files[0] ?? ""
    const reader = new FileReader()

    reader.onload = (event) => {
      console.table(file.name.split(".").pop())
      mudarDireto("imagem", event.target?.result)
    }
    if(file){
      reader.readAsDataURL(file)
    }
  }

  function salvarVideo(e) {
    const file = e.target?.files[0] ?? ""
    const reader = new FileReader()

    reader.onload = (event) => {
      mudarDireto("video" , event.target?.result)
    }
    if(file){
      reader.readAsDataURL(file)
    }
  }
  return (
    <div>
      <MenuResponsive />

      <div className='flex justify-center items-center mt-10 text-bg-footer font-bold text-2xl'>
        <h1>Admin Inserindo exercícios em determinado Nível!</h1>
      </div>
      <section className='h-5/6 mt-10 flex items-center justify-center'>
        <form onSubmit={(e) => {
          e.preventDefault()
          requisitar("exercicios/create", valores)
        }} className='bg-3d rounded-3xl flex flex-col border-primaryColor border border-solid px-20 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
          <div className=' text-white font-bold text-xl flex flex-row py-4 gap-10 items-center'>
            <button type="button" onClick={() => {
              navigate('/exercicios')
            }} className="btn btn-md btn-light text-borda text-lg font-bold px-8 duration-200 border-primaryColor border-2 border-solid">
              <i className="bi bi-box-arrow-left // text-borda"></i> Voltar
            </button>
            <h1>Inserindo Exercícios </h1>
          </div>

          <div>
            <label htmlFor="Nome" className=' text-white font-bold text-xl underline'>Insira o Nome do Exercício:</label>
            <input type="text" id='Nome' className='form-control border-solid border-bg-footer border-2 rounded-lg text-center my-3 font-bold text-borda' onChange={mudar("nome")} value={valores.nome} placeholder='Insira o Nome do Exercicio' />
          </div>

          <div>
            <label htmlFor="select" className='text-white font-bold text-xl underline'>Insira O Nivel do Exercício:</label>
            <select type="" id='select' className='form-control border-solid border-3d border-2 rounded-lg text-center my-3 font-bold text-borda' onChange={mudar("nivel")} value={valores.nivel} >
              <option value="iniciante" >Iniciante</option>
              <option value="intermediário" >Intermediário</option>
              <option value="avançado" >Avançado</option>
            </select>
          </div>

          <div>
            <label htmlFor="series" className='text-white font-bold text-xl underline'>Séries:</label>
            <input type="text" id='series' className='form-control border-solid border-3d border-2 rounded-lg text-center my-3 font-bold text-borda' onChange={mudar("serie")} value={valores.serie} />
          </div>

          <div>
            <label htmlFor="repeticoes" className='text-white font-bold text-xl underline'>Repetições:</label>
            <input type="text" id='repeticoes' className='form-control border-solid border-3d border-2 rounded-lg text-center my-3 font-bold text-borda' onChange={mudar("repeticoes")} value={valores.repeticoes} />
          </div>

          <div>
            <label htmlFor="instrucoes" className='text-white font-bold text-xl underline'>Instruções:</label>
            <input type="text" id='instrucoes' className='form-control border-solid border-3d border-2 rounded-lg text-center my-3 font-bold text-borda' onChange={mudar("instrucoes")} value={valores.instrucoes} placeholder='Insira as instruções do exercicio' />
          </div>

          <div>
            <img 
            src={valores.imagem} 
            
            alt="" />
            <label htmlFor="img">Selecione Sua Imagem</label>
            <input onChange={salvarImagem} accept='image/*' type="file" id='img' className='hidden'/>
          </div>

          <div>
            <video
            src={valores.video} 
            controls
            alt="" />
            <label htmlFor="video">Selecione Seu Vídeo</label>
            <input onChange={salvarVideo} accept='video/*' type="file" id='video' className='hidden'/>
          </div>

          <div className='pb-5 pt-4 flex justify-center items-center'>
            <button type="submit"
              className="btn btn-md btn-light text-borda text-lg font-bold px-8 duration-200 border-primaryColor border-2 border-solid ">
              <i className="bi bi-envelope-open me-2"></i>Salvar
            </button>
          </div>

          {dados && <button onClick={async () => {
            const resposta = await requisitar(`exercicios/deletar/${id}`)
          }}>Deletar</button>}

        </form>
      </section>

      <FooterResponsive />

    </div>
  )
}

export default ExerciciosForm