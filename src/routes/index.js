const { Router } = require("express")
const router = Router()
const path = require("path")

const views = path.join(__dirname, "/../views")
console.log('desde routes: '+views)

const isLoggedIn = (req, res, next) =>{
    if(req.cookies.username){
        next()
    } else{
        res.redirect("/register")
    }
}

router.get("/", isLoggedIn, (req, res) =>{
    res.sendFile(views+"/index.html")
})

router.get("/register", (req, res)=>{
    res.sendFile(views+"/register.html")
})

module.exports = router