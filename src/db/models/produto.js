const mongoose = require('mongoose')

const schema = mongoose.Schema({
nome: {
type: String,
require : true

},

preco: {
    type: Number,
    require : true

},
tipo: {
type: String,
required: true

},

tag: {
type: String,
required: false

}



})

const Produto = mongoose.model('produto', schema)
module.exports = Produto