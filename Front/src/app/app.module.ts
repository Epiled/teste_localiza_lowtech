import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { InputComponent } from './shared/input/input.component';
import { CobrancaComponent } from './components/cobranca/cobranca.component';
import { UsersService } from 'src/app/service/users.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { CobrancasService } from 'src/app/service/cobrancas.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ClientesComponent,
    CobrancaComponent,
    TituloComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    UsersService,
    ClientesService,
    CobrancasService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
