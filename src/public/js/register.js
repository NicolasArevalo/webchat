
login.addEventListener("click", createCookie)

form.addEventListener("submit", e => {
    e.preventDefault()
    createCookie()
})

function createCookie() {
    if (nombreUsuario.value.length >= 3) {
        if (nombreUsuario.value.length < 23) {
            if (nombreUsuario.value.match(/^[A-Za-z0-9\s]+$/g)) {
                document.cookie = `username=${nombreUsuario.value}`
                console.log('El nombre de usuario guardado fue ' + nombreUsuario.value)
                document.location.href = "/"
            } else{
                alert('No uses carácteres especiales, solo letras y números 🙄')
            }

        } else {
            alert("Dije una biblia? ¡No! Dije un nombre. Escriba algo más corto 🙄🙄")
        }

    } else {
        alert("Y el nombre? Adivino cuál es? no mano, escribe algo legible...")
    }
}
