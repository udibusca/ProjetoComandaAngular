export class Produto {
    id       : number;
    categoria: object;
    adicional: object;
    descricao: string;
    valor    : number;
    situacao : boolean;

    constructor(id: number,categoria: object,descricao: string,valor: number,situacao: boolean){
        this.id        = id;
        this.categoria = categoria;
        this.descricao = descricao;
        this.valor     = valor;
        this.situacao  = situacao;
    }
}