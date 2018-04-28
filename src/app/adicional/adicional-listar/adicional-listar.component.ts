import { Component, OnInit } from '@angular/core';
import { Adicional } from "../adicional";
import { AdicionalService } from "../adicional.service";
import { Router } from '@angular/router';

@Component({
  selector: 'adicional-listar',
  templateUrl: './adicional-listar.component.html',
  styleUrls: ['./adicional-listar.component.css'],
  providers: [AdicionalService]
})
export class AdicionalListarComponent implements OnInit {

  private obj: Adicional[];
  private titulo: String;

  constructor(private router: Router,
              private objService: AdicionalService) { }

  ngOnInit() {
    this.getAllAdicionals();
    this.titulo = "Adicionais";
  }

  getAllAdicionals() {
    this.objService.pesquisaTodos().subscribe(
      obj => {
        this.obj = obj;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirecionaNovaAdicionalPage() {
    this.router.navigate(['/adicional/novo']);
  }

  editaAdicionalPage(obj: Adicional) {
    if (obj) {
      this.router.navigate(['/adicional/editar', obj.id]);
    }
  }

  deletarAdicional(obj: Adicional) {
    if (obj) {
      this.objService.deletarAdicionalPorId(obj.id).subscribe(
        res => {
          this.getAllAdicionals();
          this.router.navigate(['/adicional']);
          console.log('Cadastrado com sucesso');
        }
      );
    }
  }

}

