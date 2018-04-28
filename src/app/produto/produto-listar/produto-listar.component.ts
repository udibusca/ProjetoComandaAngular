import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";
import { Router } from '@angular/router';

@Component({
  selector: 'produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css'],
  providers: [ProdutoService]
})
export class ProdutoListarComponent implements OnInit {

  private obj: Produto[];
  private titulo: String;

  constructor(private router: Router,
              private objService: ProdutoService) { }

  ngOnInit() {
    this.getAllProdutos();
    this.titulo = "Produtos";
  }

  getAllProdutos() {
    this.objService.pesquisaTodos().subscribe(
      obj => {
        this.obj = obj;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirecionaNovaProdutoPage() {
    this.router.navigate(['/produto/novo']);
  }

  editaProdutoPage(obj: Produto) {
    if (obj) {
      this.router.navigate(['/produto/editar', obj.id]);
    }
  }

  deletarProduto(obj: Produto) {
    if (obj) {
      this.objService.deletarProdutoPorId(obj.id).subscribe(
        res => {
          this.getAllProdutos();
          this.router.navigate(['/produto']);
          console.log('Cadastrado com sucesso');
        }
      );
    }
  }

}

