const Express = require('express')
const route = Express.Router()
const homeController = require('./controllers/homeController.js')


//rota padrão para a página inicial
route.get('/', homeController.paginaInicial)
route.post('/', homeController.tratamentoPost)

module.exports = route

















