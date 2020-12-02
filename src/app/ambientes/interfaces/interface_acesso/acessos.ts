import { Usuario } from "src/app/perfil/interfaces/usuario";
import { Ambiente } from "../interface_ambiente/ambiente";

export interface Acessos {
    id: number,
    dataCreate: any,
    dataUpdate: any,
    dataEntrada: any,
    dataSaida: any,
    usuarioId: Usuario,
    ambienteId: Ambiente
}
