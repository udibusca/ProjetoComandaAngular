import { Injectable } from '@angular/core';
import { Pedido } from "./pedido";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PedidoService {

    private apiUrl = 'http://localhost:8080/pedidos';

    constructor(private http: Http) {
    }

    pesquisaPorId(id: number): Observable<Pedido> {
        return this.http.get(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro -> pesquisaPorId'));
    }

    pesquisaTodos(): Observable<Pedido[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> pesquisaTodos'));
    }

}
