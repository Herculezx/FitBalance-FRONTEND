import axios from "axios"
import { useState } from "react"
import { backendUrl } from "./useRequisitar";

export default function useEnviar(aoReceber=() => {}){
    const [carregando, setCarregando] = useState(false);
   
     return {
        requisitar: async (url , data) => {
            const userJson = localStorage.getItem("user");
            const user = JSON.parse(userJson || '{}');
           const email = user.email
            setCarregando(true)
            const requisicao = await axios.post(backendUrl + url , data, { headers: {
                "Content-type": "application/json",
                "logado": email
              }})
            console.log(requisicao.data)
            aoReceber(requisicao.data)
            setCarregando(false)
            return requisicao.data
        } ,
    }
}