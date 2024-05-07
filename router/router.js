const express = require ('express')
const router = express.Router()
const ProdutoController = require('../src/db/controllers/ProdutoController')





router.get('/', (req, res) => {
    res.json("Ok")
})


// rotas de produtos
router.get('/produtos', ProdutoController.getAll)
router.post('/produtos', ProdutoController.create)







module.exports = router