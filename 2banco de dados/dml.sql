USE db_marceneiro;


-- login do usuario
insert into tb_marceneiro(nm_marceneiro, ds_email, ds_senha)
	values('admin', 'admin@marceneiro.com', '1234');
    
-- login
select id_marceneiro 	 id,
	   nm_marceneiro	 nome,
       ds_email		 	 email
from   tb_marceneiro
where  ds_email		 	 = 'admin@marceneiro.com'
and    ds_senha 	 	 = '1234';

-- cadastrar pedido
insert into tb_pedidos(nm_pedido, ds_corEmadeira, ds_endereco, dt_data, vl_valor, ds_madeira, ds_medida )
	values('Estante', 'MDF Pinheiro',"rua ablublublé 1499", '2022-02-20', 1500, "revestido", '100-50-30');

-- alterar pedido
update tb_pedidos
   set nm_pedido = 'a',	
	   dt_data = '20-02-2020',
       ds_endereco = 'pipipopo',
       ds_corEmadeira = 'a b',
       vl_valor = 3123,
       ds_madeira = 'resistente a umidade',
       ds_medida = '302-312-32'
where  id_pedido = 1;

-- deletar pedidos
delete from tb_pedidos
	  where id_pedido = 1;
      
-- consultar pedidos
select id_pedido   id,
	   nm_pedido   nome,	
	   dt_data     data,
       ds_endereco endereco ,
       ds_corEmadeira corEmadeira,
       vl_valor valor,
       ds_madeira madeira,
       ds_medida medida;
       
-- consultar pedidos por nome
select id_pedido   id,
	   nm_pedido   nome,	
	   dt_data     data,
       ds_endereco endereco ,
       ds_corEmadeira corEmadeira,
       vl_valor valor,
       ds_madeira madeira,
       ds_medida medida
from tb_pedidos
where nm_pedido 	like '%a%';

-- consultar pedidos por ID
select id_pedido   id,
	   nm_pedido   nome,	
	   dt_data     data,
       ds_endereco endereco ,
       ds_corEmadeira corEmadeira,
       vl_valor valor,
       ds_madeira madeira,
       ds_medida medida
from tb_pedidos
where id_pedido	= 1 ;

   



insert into tb_menu(dt_ped_recente, dt_data_prox)
	values('2022-04-20', '2022-05-30');

    


drop table tb_marceneiro;
drop table tb_pedidos;

select * from tb_marceneiro;
select * from tb_pedidos;
