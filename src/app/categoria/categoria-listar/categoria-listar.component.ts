import { Component, OnInit } from '@angular/core';
import { Categoria } from "../categoria";
import { CategoriaService } from "../categoria.service";
import { Router } from '@angular/router';

@Component({
  selector: 'categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css'],
  providers: [CategoriaService]
})
export class CategoriaListarComponent implements OnInit {

  private cat: Categoria[];
  private titulo: String;

  constructor(private router: Router,
              private catService: CategoriaService) { }

  ngOnInit() {
    this.getAllCategorias();
    this.titulo = "Categorias";
  }

  getAllCategorias() {
    this.catService.pesquisaTodos().subscribe(
      cat => {
        this.cat = cat;
        console.log(JSON.stringify(cat));
      },
      err => {
        console.log(err);
      }
    );
  }

  redirecionaNovaCategoriaPage() {
    this.router.navigate(['/categoria/novo']);
  }

  editaCategoriaPage(cat: Categoria) {
    if (cat) {
      this.router.navigate(['/categoria/editar', cat.id]);
    }
  }

  deletarCategoria(cat: Categoria) {
    if (cat) {
      this.catService.deletarCategoriaPorId(cat.id).subscribe(
        res => {
          this.getAllCategorias();
          this.router.navigate(['/categoria']);
          console.log('Cadastrado com sucesso');
        }
      );
    }
  }

}

