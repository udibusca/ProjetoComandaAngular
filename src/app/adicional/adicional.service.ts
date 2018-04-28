import { Injectable } from '@angular/core';
import { Adicional } from "./adicional";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdicionalService {

    private apiUrl = 'http://localhost:8080/adicional';

    constructor(private http: Http) {
    }

    pesquisaPorId(id: number): Observable<Adicional> {
        return this.http.get(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro -> pesquisaPorId'));
    }

    salvaAdicional(obj: Adicional): Observable<Adicional> {

        return this.http.post(this.apiUrl, obj)
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> salvaAdicional'));

    }

    deletarAdicionalPorId(id: number): Observable<boolean> {
        return this.http.delete(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> deletarAdicionalPorId'));
    }

    updateAdicional(obj: Adicional): Observable<Adicional> {
        return this.http.post(this.apiUrl, obj)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> updateAdicional'));

    }

    pesquisaTodos(): Observable<Adicional[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> pesquisaTodos'));
    }

}
