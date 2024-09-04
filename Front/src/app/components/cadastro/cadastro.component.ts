import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @Input() nome: string = "";
  @Input() senha: string = "";
  @Input() email: string = "";

  constructor(private service: UsersService,) { }

  ngOnInit() {
  }

  criarUser() {
    const user = {
      "nome": this.nome,
      "senha": this.senha,
      "email": this.email
    }
    
    this.service.postUser(user).subscribe({
      next: (response) => {
        console.log('Usuário criado com sucesso:', response);
      },
      error: (error: any) => {
        console.error('Erro ao criar usuário:', error);
      },
      complete: () => {
        console.log('Requisição para criar usuário completa.');
      }
    });
  }

}
