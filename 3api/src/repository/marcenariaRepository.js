import { con } from './connection.js';


export async function inserirMarcenaria(marc) {
    const comando =
        `INSERT INTO  tb_pedidos(nm_pedido, ds_corEmadeira, ds_endereco, dt_data, vl_valor, ds_madeira, ds_medida)   
             VALUES (?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando, [marc.nome, marc.corEmadeira, marc.endereco, marc.data, marc.valor, marc.madeira, marc.medida]);

    marc.id = resposta.insertId;

    return marc;
}

export async function buscarPorTodosPedidos() {
    const comando =
        `select 
          id_pedido   id,
          nm_pedido   nome,	
          dt_data     data,
          ds_endereco endereco ,
          ds_corEmadeira corEmadeira,
          vl_valor valor,
          ds_madeira madeira,
          ds_medida medida
      from tb_pedidos`;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarPorNomePedido(nome) {
    const comando =
        `select 
          id_pedido   id,
          nm_pedido   nome,	
          dt_data     data,
          ds_endereco endereco ,
          ds_corEmadeira corEmadeira,
          vl_valor valor,
          ds_madeira madeira,
          ds_medida medida
      from tb_pedidos
      where nm_pedido like ? `;
}

export async function buscarPorIdPedido(id) {
    const comando =
        `select id_pedido   id,
                    nm_pedido   nome,	
                    dt_data     data,
                    ds_endereco endereco ,
                    ds_corEmadeira corEmadeira,
                    vl_valor valor,
                    ds_madeira madeira,
                    ds_medida medida
            from tb_pedidos
            where id_pedido = ? `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function deletarPedido(id) {
    const comando =
        `delete from tb_pedidos
	    where id_pedido = ?`;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarPedido(id, pedido) {
    const comando =
        `update tb_pedidos
    set nm_pedido = ?,	
        dt_data = ?,
        ds_endereco = ?,
        ds_corEmadeira = ?,
        vl_valor = ?,
        ds_madeira = ?,
        ds_medida = ?
    where  id_pedido = ?`
    const [resposta] = await con.query(comando, [pedido.nome, pedido.data, pedido.endereco, pedido.corEmadeira, pedido.valor, pedido.madeira, pedido.medida, id]);
    return resposta.affectedRows
}