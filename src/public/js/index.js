const socket = io()
let conectadosCount = 1
const enviarMensaje = () => {
    if (mssg.value.length < 1) {
        alert('Mano, qué vas a mandar? le das a enviar pero está vacío el mensaje, telepatico no soy.')
        return
    }

    const minutes = new Date().getHours()
    let seconds = new Date().getMinutes()

    if( seconds < 10 ) seconds = `0${seconds}`
    
    socket.volatile.emit("sent message", { message: mssg.value, time: `${minutes}:${seconds}` })
    mssg.value = ""
}
document.addEventListener('keypress', ({ key }) => {
    if (key === "Enter") enviarMensaje()
})
sendMessage.addEventListener("click", enviarMensaje)

socket.on("sent message", ({ user, message, time, id }) => {

    let newMessage

    if (socket.id === id) {
        newMessage = document.createRange().createContextualFragment(`

            <div class="message my-mssg" id="mssgBubble" key=${id}>
                <header>
                    <span id="username">${user}</span>
                    <span id="time">${time}</span>
                </header>
                <p id="mssg-spot">
                    ${message}
                </p>
            </div>
        `)

    } else {
        newMessage = document.createRange().createContextualFragment(`

            <div class="message" id="mssgBubble" key=${id}>
                <header>
                    <span id="username">${user}</span>
                    <span id="time">${time}</span>
                </header>
                <p id="mssg-spot">
                    ${message}
                </p>
            </div>
        `)

    }


    allMssgs.append(newMessage)
    document.querySelector('main').scrollTop = allMssgs.scrollHeight
})

socket.on("new connection", connections => {
    countConectados.textContent = connections
})
