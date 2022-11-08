const socket = io()

sendMessage.addEventListener("click", () => {
    if(mssg.value.length <1 ) {
        alert('Mano, qué vas a mandar? le das a enviar pero está vacío el mensaje, telepatico no soy.')
        return
    }
    
    socket.volatile.emit("sent message", mssg.value)
    mssg.value=""
})
socket.on("sent message", ({ user, mssg, time }) => {
    const newMessage = document.createRange().createContextualFragment(`

    <div class="message" id="mssgBubble">
        <header>
            <span id="username">${user}</span>
            <span id="time">${time}</span>
        </header>
        <p id="mssg-spot">
            ${mssg}
        </p>
    </div>
    
    `)

    allMssgs.append(newMessage)
})