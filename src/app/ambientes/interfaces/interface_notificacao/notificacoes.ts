import { Ambiente } from '../interface_ambiente/ambiente';
export interface Notificacao{
    id: number,
    ambiente: Ambiente,
    statusLuz: any,
    salaOcupada: boolean,
    temperaturaSala: any,
    pessoaAcesso: any
}
