import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { Categoria } from "../categoria";
import { CategoriaService } from "../categoria.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'categoria-novo',
  templateUrl: './categoria-novo.component.html',
  styleUrls: ['./categoria-novo.component.css'],
  providers: [CategoriaService]
})
export class CategoriaNovoComponent implements OnInit, OnDestroy {


  id: number;
  cat: Categoria;

  catForm: FormGroup;
  private sub: any;

  private titulo: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private catService: CategoriaService,
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.titulo = "Categoria";
    });

    this.catForm = new FormGroup({
      descricao: new FormControl('', Validators.required)
    });



    if (this.id) {
      this.catService.pesquisaPorId(this.id).subscribe(
        cat => {
          this.id = cat.id;
          this.catForm.patchValue({
            descricao: cat.descricao
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
    if (this.catForm.valid) {
      if (this.id) {
        let cat: Categoria = new Categoria(this.id,
          this.catForm.controls['descricao'].value);
          this.catService.updateCategoria(cat).subscribe();
          location.reload();
      } else {
        let cat: Categoria = new Categoria(null,
          this.catForm.controls['descricao'].value);
        this.catService.salvaCategoria(cat).subscribe();
        location.reload();
      }

      this.catForm.reset();
      this.router.navigate(['/categoria']);
    }
  }

  redirecionaCategoriaPage() {
    this.router.navigate(['/categoria']);

  }

}
