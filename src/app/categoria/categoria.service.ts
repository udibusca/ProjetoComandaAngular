import { Injectable } from '@angular/core';
import { Categoria } from "./categoria";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoriaService {

    private apiUrl = 'http://localhost:8080/categoria';

    constructor(private http: Http) {
    }

    pesquisaPorId(id: number): Observable<Categoria> {
        return this.http.get(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro -> pesquisaPorId'));
    }

    salvaCategoria(cat: Categoria): Observable<Categoria> {

        return this.http.post(this.apiUrl, cat)
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> salvaCategoria'));

    }

    deletarCategoriaPorId(id: number): Observable<boolean> {
        return this.http.delete(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> deletarCategoriaPorId'));
    }

    updateCategoria(cat: Categoria): Observable<Categoria> {
        return this.http.post(this.apiUrl, cat)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> updateCategoria'));

    }

    pesquisaTodos(): Observable<Categoria[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> pesquisaTodos'));
    }

}
