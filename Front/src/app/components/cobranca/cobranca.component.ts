import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cobranca } from 'src/app/models/Cobranca';
import { CobrancasService } from 'src/app/service/cobrancas.service';
import { checkPrazo } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-cobranca',
  templateUrl: './cobranca.component.html',
  styleUrls: ['./cobranca.component.scss'],
})
export class CobrancaComponent implements OnInit {
  modalRef?: BsModalRef; // Referência ao modal
  config = {
    keyboard: true
  };

  public cobrancasUser: Cobranca[] = [];
  public id: string = "";
  public userId: string = "";
  checkPrazo = checkPrazo


  cobrancaSelected: Cobranca = {
    "id": "",
    "idCliente": "",
    "descricao": "",
    "valor": "",
    "dataVencimento": "",
    "pago": false,
  };

  constructor(
    private route: ActivatedRoute,
    private service: CobrancasService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // Recuperando o ID dos queryParams
    this.route.queryParams.subscribe((params) => {
      this.id = params['idCliente'];
      this.userId = params['userId'];

      if (this.id) {
        this.service.getCobrancasByClient(this.id).subscribe((cobrancas) => {
          this.cobrancasUser = cobrancas;
        });
      } else {
        console.log('Nenhum ID encontrado nos queryParams.');
      }
    });
  }

  openModal(template: TemplateRef<void>, cobranca: Cobranca): void {
    this.modalRef = this.modalService.show(template, this.config);
    this.cobrancaSelected = { ...cobranca };
  }

  criarCobranca() {

  }

  editarCobranca() {
    this.service.putCobranca(this.cobrancaSelected).subscribe(updatedCliente => {
      const index = this.cobrancasUser.findIndex(c => c.id === updatedCliente.id);
      if (index !== -1)
        this.cobrancasUser[index] = updatedCliente;
    });
  }

  cancelEdit(clienteId: string): void {
    const original = this.cobrancasUser.find(cliente => cliente.id === clienteId);

    if(original)
    this.cobrancaSelected = { ...original };
  }

  excluirCobranca(idCobranca: string) {
    if (idCobranca) {
      this.service.deleteCobranca(idCobranca).subscribe(() => {
        // Remove a cobrança da lista local
        this.cobrancasUser = this.cobrancasUser.filter(c => c.id !== idCobranca);
      });
    } else {
      console.log('Nenhuma cobrança com esse ID foi encontrada');
    }
  }
}
