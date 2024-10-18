import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const backendUrl = "http://localhost:8080/"

const useRequisitar = (url, dependencias = []) => {
   const [carregando , setCarregando] = useState(true);
   const [dados , setDados] = useState(undefined);
   const requisitar = async () => {
      if (dependencias.every(e => !!e)) {
         setCarregando(true)
         const userJson = localStorage.getItem("user");
         const user = JSON.parse(userJson || '{}');
       const email = user.email
       const response = await axios.get(`${backendUrl}${url}`,  { headers: {
           "Content-type": "application/json",
           "logado": email
         }})
       const data = response.data
       setDados(data)
       setCarregando(false)
      }
}
   useEffect(() => {
    requisitar()
   }, dependencias)
   return {
    carregando, dados, requisitar
   }
}

export default useRequisitar