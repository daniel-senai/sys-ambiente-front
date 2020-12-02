import { Endereco } from "./Endereco";

export interface Usuario {
    id: number,
    nome: string,
    email: string,
    celular: string,
    senha: string,
    codDFID: string,
    token: string,
    status: boolean
    endereco: Endereco,
}