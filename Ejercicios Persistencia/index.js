const nombre = "Mónica"
const apellido = "García"

const persona = {
    nombre:"Mónica",
    apellido: "García"
}

localStorage.setItem("persona", JSON.stringify(persona))
sessionStorage.setItem("persona", JSON.stringify(persona))



const date = new Date()

document.cookie = "datosPersona=${JSON.stringify(persona)};expires=" + new Date(date.getTime() + 2 * 60000).toUTCString()
