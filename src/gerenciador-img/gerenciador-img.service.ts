import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { Img } from './gerenciador-img.model';

@Injectable()
export class GerenciadorImgService {
    eventos = [
        {
            "requisicaoId": "0000",            
            "clienteId": "0000",
            "timestamp": "24-09-2008",
            "status": "Em processamento"
        }

    ];//passar para o banco de dados e criar função para gerar eventos

    enderecos = [];//passar para o banco de dados e criar função para separar cada evento e seu diretorio

    getAll(){
        return this.enderecos;//retornar enderecos do banco de dados do evento ativo
    }

    postAdc(ataque: String, path: string){
        let infoImg: Img = {
            id: this.enderecos.length,//setar isso automaticamente
            ataque,
            path,
        }
        return this.enderecos.push(infoImg);//adicionar no table do banco de dados com evento ativo
    }

    postEdit(ataque: String, id: number){
        id = this.reqId(id);
        this.enderecos[id].ataque = ataque;

        return this.enderecos;
    }

    reqId(id: number){
        let i;
        for(i = 0; i < this.enderecos.length; i++){
            let aux:Img = this.enderecos[i];
            if(aux.id == id)
                return id;
        }
        return 10201; //numero qualquer
    }
    
    dellRmv(id: string){}

}
