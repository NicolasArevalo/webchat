const socket = io()
let conectadosCount = 1
const enviarMensaje = () => {
    if (mssg.value.length < 1) {
        alert('Mano, qué vas a mandar? le das a enviar pero está vacío el mensaje, telepatico no soy.')
        return
    }

    socket.volatile.emit("sent message", mssg.value)
    mssg.value = ""
/*     const aSumar = allMssgs.scrollHeight + 400 */

/*     document.querySelector('main').scrollTop = aSumar */
}
document.addEventListener('keypress', ({ key }) => {
    if (key === "Enter") enviarMensaje()
})
sendMessage.addEventListener("click", enviarMensaje)

socket.on("sent message", ({ user, mssg, time, id }) => {

    let newMessage

    if (socket.id === id) {
        newMessage = document.createRange().createContextualFragment(`

            <div class="message my-mssg" id="mssgBubble" key=${id}>
                <header>
                    <span id="username">${user}</span>
                    <span id="time">${time}</span>
                </header>
                <p id="mssg-spot">
                    ${mssg}
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
                    ${mssg}
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
