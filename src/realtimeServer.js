let conectados = 0

module.exports = httpServer =>{
    const { Server } = require("socket.io")
    const io = new Server(httpServer)
    io.on("connection", socket =>{

        conectados++
        io.emit("new connection", conectados)
        console.log(socket)

        socket.on("sent message", mssg =>{
            const timeArr = socket.handshake.time.split(' ')[4].split(':')
            io.emit("sent message", {
                user: socket.handshake.headers.cookie.split('=').pop(),
                mssg,
                time: `${timeArr[0]}:${timeArr[1]}`,
                id: socket.id
            })
        })
        socket.on("disconnect", ()=> {
            conectados--
            io.emit("new connection", conectados)
        } )
    })
}