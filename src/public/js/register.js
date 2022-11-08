
login.addEventListener("click", createCookie)

form.addEventListener("submit", e =>{
    e.preventDefault()
    createCookie()
})

function createCookie(){
    if (nombreUsuario.value != "") {
        document.cookie = `username=${nombreUsuario.value}`
        console.log('El nombre de usuario guardado fue '+nombreUsuario.value)
        document.location.href = "/"
    } else {
        alert("Y el nombre? Adivino cuál es? no mano, escribe algo...")
    }
}
