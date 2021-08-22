export interface Evento {
    clienteId: string;
    timestamp: string;
    enderecos: [];
    status: StatusAnalise;
    //criar um metodo para alterar o status;
}

export enum StatusAnalise {
    FINALIZADA = "FINALIZADO",
    EM_PROCESSAMENTO = "EM PROCESSAMENTO",
    CANCELADA = "CANCELADO"
}