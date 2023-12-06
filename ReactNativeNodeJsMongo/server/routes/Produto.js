const express = require('express');
const app = express();
const produtoRoutes = express.Router();

const Produto = require('../model/Produto');

// Rota para adicionar produto
produtoRoutes.route('/add').post((req, res) => {
    const produto = new Produto(req.body);
    produto.save()
        .then(() => res.status(200).json({ 'status': 'success', 'message': 'Produto adicionado com sucesso!' }))
        .catch(err => res.status(400).json({ 'status': 'failure', 'message': 'Não conseguimos adicionar.' }));
});

// Rota para obter produtos
produtoRoutes.route('/').get((req, res) => {
    Produto.find()
        .then(produtos => res.status(200).json({ 'status': 'success', 'produtos': produtos }))
        .catch(() => res.status(400).json({ 'status': 'failure', 'message': 'Algo deu errado.' }));
});

// Rota para obter um produto específico
produtoRoutes.route('/produto/:id').get((req, res) => {
    const id = req.params.id;
    Produto.findById(id)
        .then(produto => res.status(200).json({ 'status': 'success', 'produto': produto }))
        .catch(() => res.status(400).json({ 'status': 'failure', 'message': 'Algo deu errado.' }));
});

// Rota para atualizar um produto
produtoRoutes.route('/update/:id').put((req, res) => {
    Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(produto => res.status(200).json({ 'status': 'success', 'message': 'Update completo!', 'produto': produto }))
        .catch(() => res.status(400).json({ 'status': 'failure', 'message': 'Algo deu errado.' }));
});

// Rota para deletar um produto
produtoRoutes.route('/delete/:id').delete((req, res) => {
    Produto.findByIdAndRemove({ _id: req.params.id })
        .then(() => res.status(200).json({ 'status': 'success', 'message': 'Produto deletado com sucesso!' }))
        .catch(() => res.status(400).json({ 'status': 'failure', 'message': 'Algo deu errado.' }));
});

module.exports = produtoRoutes;
