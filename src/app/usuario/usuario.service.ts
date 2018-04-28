import { Injectable } from '@angular/core';
import { Usuario } from "./usuario";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuario';

  constructor(private http: Http) {
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get(this.apiUrl + '/'+id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Erro -> findById'));
  }

  saveUser(user: Usuario): Observable<Usuario> {

    return this.http.post(this.apiUrl, user)
      .catch((error:any) => Observable.throw(error.json().error || 'Server erro -> saveUser'));

  }

  deletarUsuarioPorId(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server erro -> deletarUsuarioPorId'));
  }

  updateUser(user: Usuario): Observable<Usuario> {
    return this.http.post(this.apiUrl, user)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server erro -> updateUser'));

  }

  findAll(): Observable<Usuario[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server erro -> findAll'));
  }

}
