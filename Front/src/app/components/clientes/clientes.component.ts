import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/models/Cliente';
import { ClientesService } from 'src/app/service/clientes.service';
import { CobrancasService } from 'src/app/service/cobrancas.service';
import { checkPrazo } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  modalRef?: BsModalRef; // Referência ao modal
  config = {
    keyboard: true,
  };

  clientes: Cliente[] = [];
  clienteSelected: Cliente = {
    id: '',
    nome: '',
    pagos: 0,
    abertos: 0,
    atrasados: 0,
  };

  id: string = '';

  constructor(
    private service: ClientesService,
    private serviceCobranca: CobrancasService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id']; // o "+" converte a string para número
      if (this.id) {
        this.service.getClientesByUser(this.id).subscribe((clientes) => {
          this.clientes = clientes;
          clientes.forEach((cliente) => {
            this.serviceCobranca
              .getCobrancasByClient(cliente.id)
              .subscribe((cc) => {
                const abertos = cc.filter((c) => c.pago == false).length;
                const pagos = cc.filter((c) => c.pago == true).length;
                const atrasados = cc.filter((c) => checkPrazo(c.dataVencimento) === true).length;

                return cliente = { ...cliente, abertos, pagos, atrasados };
              });
          });
        });
      } else {
        console.log('Nenhum ID encontrado nos queryParams.');
      }
    });
  }

  openModal(template: TemplateRef<void>, cliente: Cliente): void {
    this.modalRef = this.modalService.show(template, this.config);
    this.clienteSelected = { ...cliente };
  }

  editarCobranca(): void {
    this.service
      .putCliente(this.clienteSelected)
      .subscribe((updatedCliente) => {
        const index = this.clientes.findIndex(
          (c) => c.id === updatedCliente.id
        );
        if (index !== -1) this.clientes[index] = updatedCliente;
      });
  }

  cancelEdit(clienteId: string): void {
    const original = this.clientes.find((cliente) => cliente.id === clienteId);

    if (original) this.clienteSelected = { ...original };
  }
}
