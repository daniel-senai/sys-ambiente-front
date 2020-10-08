export interface Ambiente {
    id: number,
    tipoAmbiente: any,
    numero: number,
    bloco: string,
    area: string,
    unidInstitucional: string,
    capacidade: number,
    totalPessoa: number,
    totalComputador: number,
    ipCamera: string
}
export interface Acesso{
    id: number,
    dtEntrada: number,
    dtSaida: number,
    ambiente: Ambiente,
}