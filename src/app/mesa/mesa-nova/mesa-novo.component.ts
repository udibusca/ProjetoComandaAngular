import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from "@angular/forms";
import { Mesa } from "../mesa";
import { MesaService } from "../mesa.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'mesa-novo',
  templateUrl: './mesa-novo.component.html',
  styleUrls: ['./mesa-novo.component.css'],
  providers: [MesaService]
})
export class MesaNovoComponent implements OnInit, OnDestroy {


  id: number;
  obj: Mesa;

  objForm: FormGroup;
  private sub: any;

  private titulo: String;

  estado = ['DISPONIVEL', 'OCUPADO'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private objService: MesaService,
              private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.titulo = "Mesa";
    });

    this.objForm = new FormGroup({
      numero: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
    });



    if (this.id) {
      this.objService.pesquisaPorId(this.id).subscribe(
        obj => {
          this.id = obj.id;
          this.objForm.patchValue({
            numero: obj.numero
          });
          this.objForm.patchValue({
            estado: obj.estado
          });
          console.log(JSON.stringify(obj));
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
        let obj: Mesa = new Mesa(this.id,
          this.objForm.controls['numero'].value,
          this.objForm.controls['estado'].value);
          this.objService.updateMesa(obj).subscribe();
          location.reload();
      } else {
        let obj: Mesa = new Mesa(null,
          this.objForm.controls['numero'].value,
          this.objForm.controls['estado'].value);
        this.objService.salvaMesa(obj).subscribe();
        location.reload();
      }

      this.objForm.reset();
      this.router.navigate(['/mesa']);
    }
  }

  redirecionaMesaPage() {
    this.router.navigate(['/mesa']);

  }

}
