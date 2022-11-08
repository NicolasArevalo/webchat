const express = require("express")
const { createServer } = require("http")
const path = require("path")
const realtimeServer = require("./realtimeServer")
const cookieParser = require("cookie-parser")

const app = express()
const httpServer = createServer(app)

// Settings 
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"))
app.use(cookieParser())
// Routes
app.use( require("./routes"))

// Public
app.use( express.static( path.join( __dirname, "public")))

// Levantar servidor
httpServer.listen( app.get("port"), ()=>{
    console.log("El servidor está corriendpo en el puerto ", app.get("port"))
})

realtimeServer(httpServer)