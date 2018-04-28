import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators,FormArray } from "@angular/forms";
import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { CategoriaService } from "../../categoria/categoria.service";
import { AdicionalService } from "../../adicional/adicional.service";
import { Categoria } from '../../categoria/categoria';

@Component({
  selector: 'produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css'],
  providers: [ProdutoService,AdicionalService]
})
export class ProdutoNovoComponent implements OnInit, OnDestroy {

  id             : number;
  obj            : Produto;
  adicional      : { };
  objForm        : FormGroup;
  cat            : any;
  categorias     : { };
  private sub    : any;
  private titulo : String;
  private titulo2: String;
  situacao       = ['DISPONIVEL', 'INDISPONIVEL'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private objService: ProdutoService,
              private location: Location,
              private categoriaBusca: CategoriaService,
              private adicionais: AdicionalService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAllCategorias();
      this.titulo = "Produto";
      this.titulo2 = "Adicionais do produto";
    });

    this.objForm = new FormGroup({
      categoria: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
          valor: new FormControl('', Validators.required),
       situacao: new FormControl('', Validators.required),
    });

    if (this.id) {
      this.objService.pesquisaPorId(this.id).subscribe(
        obj => {
          this.id = obj.id;
          this.objForm.patchValue({
            descricao: obj.descricao,
                valor: obj.valor,
             situacao: obj.situacao,
            adicional: obj.adicional
          });
          this.categorias = obj.categoria;
          this.adicional = obj.adicional;
          console.log("Categoria  -> ",JSON.stringify(this.categorias));
        },error => {
          console.log(error);
        });
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.objForm.valid) {
      if (this.id) {
        let obj: Produto = new Produto(this.id,
          this.objForm.controls['descricao'].value,
          this.objForm.controls['categoria'].value,
          this.objForm.controls['valor'].value,
          this.objForm.controls['situacao'].value);
          this.objService.updateProduto(obj).subscribe();
          location.reload();
      } else {
        let obj: Produto = new Produto(null,
          this.objForm.controls['descricao'].value,
          this.objForm.controls['categoria'].value,
          this.objForm.controls['valor'].value,
          this.objForm.controls['situacao'].value);
        this.objService.salvaProduto(obj).subscribe();
        location.reload();
      }

      this.objForm.reset();
      this.router.navigate(['/produto']);
    }
  }

  redirecionaProdutoPage() {
    this.router.navigate(['/produto']);
  }

  getAllCategorias() {
    this.categoriaBusca.pesquisaTodos().subscribe(
      cat => {
        this.cat = cat;
      },
      err => {
        console.log(err);
      }
    );
  }

}