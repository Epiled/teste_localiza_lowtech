import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cobranca',
  templateUrl: './cobranca.component.html',
  styleUrls: ['./cobranca.component.scss']
})

export class CobrancaComponent implements OnInit {
  public cobrancas = [
    {
      idUser: 1,
      id: 1,
      descricao: 'Cliente teste',
      valor: "1.800,00",
      vencimento: "25/06/2024",
    },
    {
      idUser: 1,
      id: 2,
      descricao: 'Cliente teste 2',
      valor: "2.500,00",
      vencimento: "12/08/2025",
    },
    {
      idUser: 2,
      id: 3,
      descricao: 'Cliente teste 3',
      valor: "3.000,00",
      vencimento: "25/06/2024",
    }
  ];

  public cobrancasUser : any[] = [];
  public id?: number;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Recuperando o ID dos queryParams
    this.route.queryParams.subscribe(params => {
      this.id = +params['id']; // o "+" converte a string para número
      if (this.id) {
        this.filtrarPorId(this.id);
      } else {
        console.log('Nenhum ID encontrado nos queryParams.');
      }
    });
  }

  public filtrarPorId(id: number) {
    this.cobrancasUser = this.cobrancas.filter(cobranca => cobranca.idUser === id)
  }

}
