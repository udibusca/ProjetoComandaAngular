export class Adicional {
    id: number;
    descricao: string;
    valor: number;

    constructor(id: number, descricao: string, valor: number){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}