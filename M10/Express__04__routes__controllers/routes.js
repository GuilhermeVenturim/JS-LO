const Express = require('express')
const route = Express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')


//rota padrão para a página inicial
route.get('/', homeController.paginaInicial)
route.post('/', homeController.tratamentoPost)

//rotas de contato
route.get('/contato', contatoController.paginaInicial)




module.exports = route

















