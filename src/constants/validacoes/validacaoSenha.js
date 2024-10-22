import * as zod from "zod"

export default zod.string().min(8, "A senha deve ter no mínimo 8 caracteres").refine(valor =>  valor.split("").some(caracter => caracter.toLocaleLowerCase() != caracter.toUpperCase() && caracter.toUpperCase() == caracter), "A senha deve conter maiusculos").refine(senha => senha.split("").some(caracter => !isNaN(caracter)), "A Senha deve conter um numero") 