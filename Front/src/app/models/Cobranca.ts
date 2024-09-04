import { Data } from "@angular/router";

export interface Cobranca {
  id: string,
  idCliente: string,
  descricao: string,
  valor: string,
  dataVencimento: string,
  pago: boolean,
}
