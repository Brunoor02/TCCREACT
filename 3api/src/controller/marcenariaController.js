import { inserirMarcenaria, buscarPorTodosPedidos, buscarPorNomePedido, deletarPedido, alterarPedido, buscarPorIdPedido  } from "../repository/marcenariaRepository.js";

import { Router } from 'express'
const server = Router();



server.post('/marcenaria', async (req, resp) =>{
    try{
        const novoPedido = req.body;

        if(!novoPedido.nome.trim()){
            throw new Error('O nome do Pedido é OBRIGATÓRIO');
        }
        if(!novoPedido.corEmadeira.trim()){
            throw new Error('A cor do Pedido é OBRIGATÓRIA');
        }
        if(!novoPedido.endereco.trim()){
            throw new Error('O endereço do Pedido é OBRIGATÓRIO');
        }
        if(!novoPedido.data.trim()){
            throw new Error('Insira uma data valida');
        }
        if(!novoPedido.valor < 0){
            throw new Error('O valor do pedido é OBRIGATÓRIO');
        }
        if(!novoPedido.madeira.trim()){
            throw new Error('A resistência do pedido é OBRIGATÓRIA');
        }
        if(!novoPedido.medida.trim()){
            throw new Error('A medida do pedido é OBRIGATÓRIA');
        }
        const pedidoInserir = await inserirMarcenaria(novoPedido);
        
        resp.send(pedidoInserir);
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }})


server.get('/pedido', async (req, resp) => {
    try {
        const r = await buscarPorTodosPedidos();
        resp.send(r);
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/pedido/busca', async (req, resp) => {
    try {
        const { nome } = req.query;

        const resposta = await buscarPorNomePedido(nome);
        
        if (!resposta) {
            resp.status(404).send([])
        } else {
            resp.send(resposta);
        }
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/pedido/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await buscarPorIdPedido(id);
        
        if (!resposta) {
            resp.status(404).send([])
        } else {
            resp.send(resposta);
        }
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.delete('/pedido/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await deletarPedido(id);
        if (resposta != 1)
            throw new Error('Pedido não pode ser deletado');
        

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/pedido/:id', async (req, resp) =>{
    try{
        const { id } = req.params;
        const pedido = req.body;

        const resposta = await alterarPedido(id, pedido);

        if(!pedido.nome.trim()){
            throw new Error('O nome do Pedido é OBRIGATÓRIO');
        }
        if(!pedido.corEmadeira.trim()){
            throw new Error('A cor do Pedido é OBRIGATÓRIA');
        }
        if(!pedido.endereco.trim()){
            throw new Error('O endereço do Pedido é OBRIGATÓRIO');
        }
        if(!pedido.data.trim()){
            throw new Error('Insira uma data valida');
        }
        if(!pedido.valor < 0){
            throw new Error('O valor do pedido é OBRIGATÓRIO');
        }
        if(!pedido.madeira.trim()){
            throw new Error('A resistência do pedido é OBRIGATÓRIA');
        }
        if(!pedido.medida.trim()){
            throw new Error('A medida do pedido é OBRIGATÓRIA');
        }

        if (resposta != 1)
            throw new Error('Pedido não pode ser alterado')
        else
            resp.status(200).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        console.log(err)
    }
})

export default server;