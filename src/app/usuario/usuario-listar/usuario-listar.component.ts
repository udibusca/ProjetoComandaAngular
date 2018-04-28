import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";
import { UsuarioService } from "../usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css'],
  providers: [UsuarioService]
})
export class UsuarioListarComponent implements OnInit {

  private users: Usuario[];
  private titulo: String;

  constructor(private router: Router,
              private userService: UsuarioService) { }

  ngOnInit() {
    this.getAllUsers();
    this.titulo = "Usuários";
  }

  getAllUsers() {
    this.userService.findAll().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNewUserPage() {
    this.router.navigate(['/usuario/novo']);
  }

  editUserPage(user: Usuario) {
    if (user) {
      this.router.navigate(['/usuario/editar', user.id]);
    }
  }

  deletarUsuario(user: Usuario) {
    if (user) {
      this.userService.deletarUsuarioPorId(user.id).subscribe(
        res => {
          this.getAllUsers();
          this.router.navigate(['/usuario']);
          console.log('done');
        }
      );
    }
  }

}

