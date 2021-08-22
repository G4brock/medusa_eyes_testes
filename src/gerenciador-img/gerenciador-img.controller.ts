import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GerenciadorImgService } from './gerenciador-img.service';
import { Express } from 'express';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage} from 'multer';
import multer from 'multer';
import { editFileName } from './gerenciador-img.utils';
import { AnalisesService } from 'src/analises/analises.service';



@Controller('gerenciador-img')
export class GerenciadorImgController {
    //constructor(private gerenciadorImg:GerenciadorImgService){}
    constructor(private analisesService:AnalisesService){}
   
    /*@Get()
    getAll(){
        return this.gerenciadorImg.getAll();
    }*/

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: `./uploads}`,//Criar função para retornar o diretorio baseado no evento e separa as imagens por diretorio
            filename: editFileName,
        })
    }))
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('ataque') ataque: String
        ) {
            return this.analisesService.postAdc(ataque, file.path);
        //return this.gerenciadorImg.postAdc(ataque);
    }
    /*
    @Post('edit')
    postEdit(
        @Body('ataque') ataque: String,
        @Body('id') id: number
    ){
        console.log(`${ataque} e ${id}`)
        return this.gerenciadorImg.postEdit(ataque, id);
    }
    */
}
