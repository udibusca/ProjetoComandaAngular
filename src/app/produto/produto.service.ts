import { Injectable } from '@angular/core';
import { Produto } from "./produto";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProdutoService {

    private apiUrl = 'http://localhost:8080/produto';

    constructor(private http: Http) {
    }

    pesquisaPorId(id: number): Observable<Produto> {
        return this.http.get(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro -> pesquisaPorId'));
    }

    salvaProduto(obj: Produto): Observable<Produto> {

        return this.http.post(this.apiUrl, obj)
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> salvaProduto'));

    }

    deletarProdutoPorId(id: number): Observable<boolean> {
        return this.http.delete(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> deletarProdutoPorId'));
    }

    updateProduto(obj: Produto): Observable<Produto> {
        return this.http.post(this.apiUrl, obj)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> updateProduto'));

    }

    pesquisaTodos(): Observable<Produto[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> pesquisaTodos'));
    }

}
