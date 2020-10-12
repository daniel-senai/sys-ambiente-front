import { Ambiente } from './ambiente';
export interface Notificacao{
    id: number,
    ambiente: Ambiente,
    statusLuz: any,
    salaOcupada: boolean,
    temperaturaSala: any,
    pessoaAcesso: any
}
