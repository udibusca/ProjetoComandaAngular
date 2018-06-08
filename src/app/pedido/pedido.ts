import { Usuario } from "../usuario/usuario";
import { Mesa } from "../mesa/mesa";

export class Pedido {
    id: number;
    valortotal: number;
    estado: boolean;
    datapedido: Date;
    usuario : Usuario;
    mesa : Mesa;
    itemsPedido : Object;


    constructor(id: number, valortotal: number, estado: boolean,datapedido: Date,usuario: Usuario,mesa:Mesa,itemsPedido:Object){
        this.id = id;
        this.valortotal = valortotal;
        this.estado = estado;
        this.datapedido = datapedido;
        this.usuario = usuario;
        this.mesa = mesa;
        this.itemsPedido = itemsPedido;
    }
}