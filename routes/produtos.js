const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Pedidos'
    });
});

router.post('/', (req, res, next) => {

    const produto = {
       nome: req.body.nome,
       preco: req.body.preco,
       cor: req.body.cor
    }

    res.status(201).send({
        mensagem: 'Produto inserido',
        produtoCriado: produto
    })

});
//Retorna os dados de um produto
router.get('/:id_produtos', (req, res, next) => {
    const id = req.params.id_produto;

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você passou um ID espcial especial'

        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID normal'
        });

        res.status(200).send({
            mensagem: 'Usando GET de um produto exclusivo',
            id: id
        });

    }
});

router.patch('/',(req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido Alterado'
    })
})

router.delete('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido Excluido'
    });
})

module.exports = router;