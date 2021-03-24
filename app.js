const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")

const rotaprodutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended:false})); // Apenas dados simples
app.use(bodyParser.json()); //Apenas formato json

app.use('/produtos', rotaprodutos);
app.use('/pedidos', rotaPedidos);


// Quando não encontramos rota:
app.use((req, res, next) => {
    const err = new Error('Não encontrado!');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    return res.send({
        erro:{
            Mensagem: error.message
        }
    })
})

module.exports = app;