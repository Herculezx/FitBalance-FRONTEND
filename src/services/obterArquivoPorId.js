export default async (id) => {
    const resposta = await fetch(`http://localhost:8080/arquivo/${id}`)
    const foto = await resposta.blob()
    const file = foto 
    const reader = new FileReader()
    let base64;

    return new Promise((resolve, rej) => {
        reader.onload = (event) => {

            const extensao = resposta.headers.get("Content-Type")
            if (typeof event.target?.result == "string") {
                base64 = event.target?.result
                reader.readAsArrayBuffer(file)
            }
            else {
                console.log({ conteudo: Array.from(new Uint8Array(event.target?.result)) }.conteudo)
                resolve({ id,  conteudo: Array.from(new Uint8Array(event.target?.result)), extensao: extensao, base64 })
            }
        }
        if (file) {
            reader.readAsDataURL(file)
    
        }
    })
   
}