const express = require('express')
const app = express()
const routes = require('./routes')

//req.body é o corpo da requisição, podendo ser acessada através:
app.use(express.urlencoded({extended: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

//CTRL + C para desligar o servidor
