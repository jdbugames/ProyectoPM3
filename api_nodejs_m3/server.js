let express = require('express')
let app = express()
let router = express.Router()

app.use(router)
router.post('/login',(req,res)=>res.send({ "saludo" : "Hola Mundo" }))

app.listen(3000)