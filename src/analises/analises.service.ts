import { Injectable } from '@nestjs/common';
import { Evento, StatusAnalise } from './analises.model';
import { Img } from '../gerenciador-img/gerenciador-img.model';

@Injectable()
export class AnalisesService {
    eventos = [];

    getAll(){
        console.log(this.eventos.length)
        return this.eventos;
    }

    getRetornaDir(){
        return `Analise${this.eventos.length}`;
    }

    iniciaEvento(timestamp: string){
        let req:Evento = {
            clienteId: "0000",
            timestamp,
            enderecos: [],
            status: StatusAnalise.EM_PROCESSAMENTO
        };

        this.eventos.push(req);
        return this.eventos;
    }

    postCriaEvento(timestamp: string){
        if(this.eventos.length > 0){
            const { status } = this.eventos[this.eventos.length-1];
            if(status != StatusAnalise.EM_PROCESSAMENTO){
                this.iniciaEvento(timestamp);
                return 0;
            } 
        } else  
            this.iniciaEvento(timestamp);

        return this.eventos;
    }

    postAdc(ataque: String, path: string){
        console.log(`Adicionar imagem ${this.eventos.length}`);
        if(this.eventos.length > 0){
            let { enderecos } = this.eventos[this.eventos.length-1];
            let imagem: Img = {
                id: 12, //mudar para gerar automaticamente
                ataque,
                path, 
            }
            enderecos.push(imagem);
            return enderecos;
        } else
            return this.eventos;
    }

    postEncerraEvento(){
        if(this.eventos.length >= 1) {
            this.eventos[this.eventos.length-1].status = StatusAnalise.FINALIZADA;
            return this.eventos;
        } else
            return 1;
    }

    
}
