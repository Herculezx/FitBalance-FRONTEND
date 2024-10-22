import { ChangeEvent } from "react";

export default function useForm<Tipo>(data:Tipo, validacao: {[Campo in keyof Tipo ]?: Zod}): {
    valores: Tipo,
    valido: true,
    mudar: (campo: keyof Tipo) => (e: ChangeEvent) => void,
    setAll: (valor: Tipo) => void,
    erros: { [Campo in keyof Tipo ]?: string }
    mudarDireto: <Campo extends keyof Tipo>(campo: Campo, valor: Tipo[Campo]) => (e: ChangeEvent) => void,
}