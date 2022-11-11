let conectados = 0

module.exports = httpServer =>{
    const { Server } = require("socket.io")
    const io = new Server(httpServer)
    io.on("connection", socket =>{

        conectados++
        io.emit("new connection", conectados)

        socket.on("sent message", ({message, time}) =>{
            //console.table({message, time, name: socket.handshake.headers.cookie.split('=').pop(), id: socket.id})
            io.emit("sent message", {
                user: socket.handshake.headers.cookie.split('=').pop(),
                message,
                time,
                id: socket.id
            })
        })
        socket.on("disconnect", ()=> {
            conectados--
            io.emit("new connection", conectados)
        } )
    })
}