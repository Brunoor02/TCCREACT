import { con } from './connection.js'

export async function login(email, senha) { 
    const comando = 
`select  id_marceneiro          id, 
        nm_marceneiro          nome, 
        ds_email            email  
from    tb_marceneiro   
where   ds_email            = ? 
and     ds_senha            = ?`;
const [linhas] = await con.query(comando, [email, senha]);
return linhas[0]; 
}