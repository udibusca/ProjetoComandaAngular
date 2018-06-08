import { Component, OnInit } from '@angular/core';
import { Pedido } from "../pedido";
import { PedidoService } from "../pedido.service";
import { Router } from '@angular/router';

@Component({
  selector: 'pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css'],
  providers: [PedidoService]
})
export class PedidoListarComponent implements OnInit {

  private obj: Pedido[];
  private titulo: String;
  estado = ['Pendente', 'Fechado'];

  constructor(private router: Router,
              private objService: PedidoService) { }

  ngOnInit() {
    this.getAllPedidos();
    this.titulo = "Pedidos";
  }

  getAllPedidos() {
    this.objService.pesquisaTodos().subscribe(
      obj => {
        this.obj = obj;
      },
      err => {
        console.log(err);
      }
    );
  }

  visualizarPedido(){
    alert("Visualizar");
  }

}

