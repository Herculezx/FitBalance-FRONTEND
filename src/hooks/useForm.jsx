import { useState } from "react";

export const campoValido = "Campo Válido"

export default function useForm(data, validacao = {}) {
    const [valores, setValores] = useState(data)
    const [erros, setErros] = useState({ })
    const valido = Object.values(erros).reduce((acumulacao, erro) => acumulacao && erro == campoValido, true)

    function converter(campo, valor) {
        const tipo = valores[campo]
        if (typeof tipo == "number") {
            return parseFloat(valor)
        }
        else if (tipo instanceof Date) {
            const data = new Date(valor)
            data.setDate(data.getDate() + 1)
            return data
        }
        return valor
    }

    return {
        valores,
        valido,
        mudar: (campo) => (e) => {
            const valor = converter(campo, e.target.value)
            setValores({...valores, [campo]: valor})
            if (validacao[campo]) {
                
                const valido = validacao[campo].safeParse(valor)
                console.log(valido)
                if (!valido.success) {
                    console.log(valido)
                    console.log(valido.error.issues[0].message)
                    setErros(erros => ({...erros, [campo]: valido.error.issues[0].message}))
                }
                else {
                    setErros(erros => ({...erros, [campo]: campoValido}))
                }
            }
        },

        setAll: (valor) => setValores(valor),

        erros,
        mudarDireto: (campo, valor) => setValores({...valores, [campo]: valor}) 
    }
}