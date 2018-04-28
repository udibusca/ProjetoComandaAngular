import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { Adicional } from "../adicional";
import { AdicionalService } from "../adicional.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'adicional-novo',
  templateUrl: './adicional-novo.component.html',
  styleUrls: ['./adicional-novo.component.css'],
  providers: [AdicionalService]
})
export class AdicionalNovoComponent implements OnInit, OnDestroy {


  id: number;
  obj: Adicional;

  objForm: FormGroup;
  private sub: any;

  private titulo: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private objService: AdicionalService,
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.titulo = "Adicional";
    });

    this.objForm = new FormGroup({
      descricao: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    });



    if (this.id) {
      this.objService.pesquisaPorId(this.id).subscribe(
        obj => {
          this.id = obj.id;
          this.objForm.patchValue({
            descricao: obj.descricao
          });
          this.objForm.patchValue({
            valor: obj.valor
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
    if (this.objForm.valid) {
      if (this.id) {
        let obj: Adicional = new Adicional(this.id,
          this.objForm.controls['descricao'].value,
          this.objForm.controls['valor'].value);
          this.objService.updateAdicional(obj).subscribe();
          location.reload();
      } else {
        let obj: Adicional = new Adicional(null,
          this.objForm.controls['descricao'].value,
          this.objForm.controls['valor'].value);
        this.objService.salvaAdicional(obj).subscribe();
        location.reload();
      }

      this.objForm.reset();
      this.router.navigate(['/adicional']);
    }
  }

  redirecionaAdicionalPage() {
    this.router.navigate(['/adicional']);

  }

}
