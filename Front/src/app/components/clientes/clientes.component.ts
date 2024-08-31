import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public clientes = [
    {
      id: 1,
      nome: 'Cliente teste',
      pagos: 2,
      abertos: 1,
      atrasados: 3,
    },
    {
      id: 2,
      nome: 'Cliente teste 2',
      pagos: 0,
      abertos: 2,
      atrasados: 2,
    }
  ];

  constructor() {}

  ngOnInit() {}
}
