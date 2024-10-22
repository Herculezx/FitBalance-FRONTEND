import * as zod from "zod"

const hoje = new Date();

export default zod.coerce.date()
.min(new Date(hoje.getFullYear() - 70, hoje.getMonth() , hoje.getDate()), "Data não pode ultrapassar 70 anos")
.max(new Date(hoje.getFullYear() - 10, hoje.getMonth() , hoje.getDate()), "Minimo de 10 anos atrás");