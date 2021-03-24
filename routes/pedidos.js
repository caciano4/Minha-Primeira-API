const express = require('express');
const router = express.Router();


//
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Pedidos'
    });
});

router.post('/', (req, res, next) => { //Vai criar um Produto

    const pedidos = {
        id_produtos: req.body.id_produtos,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'Insere produtos',
        pedidoCriado: pedidos
    });

});
//Retorna os dados de um produto
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos;

    res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedidos: id
    });
});

router.patch('/',(req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    });
});

router.delete('/',(req, res, next) => {
    res.status(200).send({
        mensagem:'Pedido Excluido'
    });
});

module.exports = router;