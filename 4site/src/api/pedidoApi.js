import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000/'
})


export async function cadastrarPedido(nome, corEmadeira, endereco, data, valor, madeira, medida){
    //console.log(nome, corEmadeira, endereco, data, valor, madeira, medida)
    const resposta = await api.post('/marcenaria', {
        nome: nome,
        corEmadeira: corEmadeira,
        endereco: endereco,
        data: data,
        valor: Number(valor),
        madeira: madeira,
        medida: `${medida}`
    })
    return resposta.data;
}

export async function listarTodosPedidos(){
    const resposta = await api.get('/pedido');
    return resposta.data;
}

export async function alterarPedido(id, nome, corEmadeira, endereco, data, valor, madeira, medida){
    console.log(nome, corEmadeira, endereco, data, valor, madeira, medida)
    const resposta = await api.put(`/pedido/${id}`, {
        nome: nome,
        corEmadeira: corEmadeira,
        endereco: endereco,
        data: data,
        valor: Number(valor),
        madeira: madeira,
        medida: `${medida}`
    })
    return resposta.data;
}

export async function deletarPedido(id){
    const resposta = await api.delete(`/pedido/${id}`);
    return resposta.status;
}

export async function buscarPorId(id){
    const resposta = await api.get (`/pedido/${id}`);
    return resposta.data
}