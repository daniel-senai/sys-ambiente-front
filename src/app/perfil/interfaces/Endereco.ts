export interface Endereco {
    id: number,
    cep: string,
    logradouro: string,
    complemento: string,
    pais: Pais,
    estado: Estado,
    cidade: Cidade
}
export interface Pais {
    id: number,
    nome: string,
    estados: Estado[]
}
export interface Estado {
    id: number,
    nome: string
    cidades: Cidade[]
}
export interface Cidade {
    id: number,
    nome: string
}