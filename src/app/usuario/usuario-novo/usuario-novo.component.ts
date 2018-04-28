import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "../usuario";
import { UsuarioService } from "../usuario.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css'],
  providers: [UsuarioService]
})
export class UsuarioNovoComponent implements OnInit, OnDestroy {


  id: number;
  user: Usuario;

  userForm: FormGroup;
  private sub: any;

  private titulo: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UsuarioService,
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.titulo = "Usuário";
    });

    this.userForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });



    if (this.id) { //edit form
      this.userService.findById(this.id).subscribe(
        user => {
          this.id = user.id;
          this.userForm.patchValue({
            nome: user.nome,
            usuario: user.usuario,
            senha: user.senha,
          });
        },error => {
          console.log(error);
        }
      );

    }


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.id) {
        let user: Usuario = new Usuario(this.id,
          this.userForm.controls['nome'].value,
          this.userForm.controls['usuario'].value,
          this.userForm.controls['senha'].value);
        this.userService.updateUser(user).subscribe();
        location.reload();
      } else {
        let user: Usuario = new Usuario(null,
          this.userForm.controls['nome'].value,
          this.userForm.controls['usuario'].value,
          this.userForm.controls['senha'].value);
        this.userService.saveUser(user).subscribe();
        location.reload();

      }

      this.userForm.reset();
      this.router.navigate(['/usuario']);

    }
  }

  redirectUserPage() {
    this.router.navigate(['/usuario']);

  }

}
