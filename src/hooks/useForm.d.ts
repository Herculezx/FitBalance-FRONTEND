import { ChangeEvent } from "react";

export default function useForm<Tipo>(data:Tipo): {
    valores: Tipo,
    mudar: (campo: keyof Tipo) => (e: ChangeEvent) => void,
    setAll: (valor: Tipo) => void,
    mudarDireto: <Campo extends keyof Tipo>(campo: Campo, valor: Tipo[Campo]) => (e: ChangeEvent) => void,
}