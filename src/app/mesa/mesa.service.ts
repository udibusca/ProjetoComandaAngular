import { Injectable } from '@angular/core';
import { Mesa } from "./mesa";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MesaService {

    private apiUrl = 'http://localhost:8080/mesa';

    constructor(private http: Http) {
    }

    pesquisaPorId(id: number): Observable<Mesa> {
        return this.http.get(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Erro -> pesquisaPorId'));
    }

    salvaMesa(obj: Mesa): Observable<Mesa> {

        return this.http.post(this.apiUrl, obj)
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> salvaMesa'));

    }

    deletarMesaPorId(id: number): Observable<boolean> {
        return this.http.delete(this.apiUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> deletarMesaPorId'));
    }

    updateMesa(obj: Mesa): Observable<Mesa> {
        return this.http.post(this.apiUrl, obj)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> updateMesa'));

    }

    pesquisaTodos(): Observable<Mesa[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server erro -> pesquisaTodos'));
    }

}
