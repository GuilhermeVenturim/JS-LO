const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

//req.body é o corpo da requisição, podendo ser acessada através:
app.use(express.urlencoded({extended: true}))

//Path como caminho absoluto apontando para as pastas de view.
app.set('views', path.resolve(__dirname, 'src', 'views'))
//Módulo EJS para renderizar as views
app.set('view engine', 'ejs')



//Usar arquivo externo de rotas (routes)
app.use(routes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

//CTRL + C para desligar o servidor
