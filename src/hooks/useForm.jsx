import { useState } from "react";

export default function useForm(data) {
    const [valores, setValores] = useState(data)

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
        mudar: (campo) => (e) => {
            setValores({...valores, [campo]: converter(campo, e.target.value)})
        },
        setAll: (valor) => setValores(valor),
        mudarDireto: (campo, valor) => setValores({...valores, [campo]: valor}) 
    }
}