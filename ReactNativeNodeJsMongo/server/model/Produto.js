const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProdutoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Id: {
        type: Number,
        required: true,
        unique: true
    },
    preco: {
        type: String,
        required: true
    },
    estoque: {
        type: Number,
        default: 0
    },
    safra: {
        type: String
    },
    tipo: {
        type: String,
        enum: ['Tinto', 'Branco', 'Rosé', 'Espumante', 'Dessert', 'Outro']
    },
    paisOrigem: {
        type: String
    },
    regiao: {
        type: String
    },
    descricao: {
        type: String
    },
    imagemURL: {
        type: String
    },
    comentarios: [{
        usuario: String,
        comentario: String,
        data: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    collection: 'produto'
});

module.exports = mongoose.model('Produto', ProdutoSchema);
