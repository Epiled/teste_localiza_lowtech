import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() email: string = '';
  @Input() senha: string = '';

  constructor(private service: UsersService, private router: Router) {}

  ngOnInit() {}

  checkUser() {
    this.service.getCheckUser(this.email, this.senha).subscribe(
      (user: User) => {
        this.router.navigate(['/clientes'], { queryParams: { id: user.id } });
      },
      (error) => {
        console.error('Erro ao buscar usuário:', error.message);
      }
    );
  }
}
