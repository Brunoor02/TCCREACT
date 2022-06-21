create database db_marceneiro;

use db_marceneiro;

create table tb_marceneiro(
    id_marceneiro int primary key auto_increment,
    nm_marceneiro varchar (100),
    ds_email varchar(100),
    ds_senha varchar(100)
);

create table tb_pedidos(
	id_pedido int primary key auto_increment,
    nm_pedido varchar (100),
    ds_endereco varchar(100),
    ds_corEmadeira varchar(100),
    dt_data	date,
    vl_valor decimal,
    ds_madeira varchar(100),
    ds_medida varchar(100)
);

