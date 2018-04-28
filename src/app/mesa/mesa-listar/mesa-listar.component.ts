import { Component, OnInit } from '@angular/core';
import { Mesa } from "../mesa";
import { MesaService } from "../mesa.service";
import { Router } from '@angular/router';

@Component({
  selector: 'mesa-listar',
  templateUrl: './mesa-listar.component.html',
  styleUrls: ['./mesa-listar.component.css'],
  providers: [MesaService]
})
export class MesaListarComponent implements OnInit {

  private obj: Mesa[];
  private titulo: String;

  constructor(private router: Router,
              private objService: MesaService) { }

  ngOnInit() {
    this.getAllMesas();
    this.titulo = "Adicionais";
  }

  getAllMesas() {
    this.objService.pesquisaTodos().subscribe(
      obj => {
        this.obj = obj;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirecionaNovaMesaPage() {
    this.router.navigate(['/mesa/novo']);
  }

  editaMesaPage(obj: Mesa) {
    if (obj) {
      this.router.navigate(['/mesa/editar', obj.id]);
    }
  }

  deletarMesa(obj: Mesa) {
    if (obj) {
      this.objService.deletarMesaPorId(obj.id).subscribe(
        res => {
          this.getAllMesas();
          this.router.navigate(['/mesa']);
          console.log('Cadastrado com sucesso');
        }
      );
    }
  }

}

