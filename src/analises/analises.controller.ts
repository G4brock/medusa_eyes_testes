import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnalisesService } from './analises.service';
import { editFileName } from '../gerenciador-img/gerenciador-img.utils';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage} from 'multer';



@Controller('analises')
export class AnalisesController {
    constructor(private analisesServie: AnalisesService){}

    @Get()
    getAll(){
        return this.analisesServie.getAll();
    }

    @Post('/newEvent')
    postCriaEvento(@Body('timestamp') timestamp: string){
        return this.analisesServie.postCriaEvento(timestamp);
    }
    
    @Post('/encerra')
    postEncerraEvento(){
        return this.analisesServie.postEncerraEvento();
    }


    //para teste

   @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: `./uploads`,//Criar função para retornar o diretorio baseado no evento e separa as imagens por diretorio
            filename: editFileName,
        })
    }))
    uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('ataque') ataque: String
        ) {
            return this.analisesServie.postAdc(ataque, file.path);
        //return this.gerenciadorImg.postAdc(ataque);
    }

    @Post('uploadv2')
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage({
            destination: `./uploads`,//Criar função para retornar o diretorio baseado no evento e separa as imagens por diretorio
            filename: editFileName,
        })
    }))
    uploadFileV2(
        @UploadedFiles() files: Array<Express.Multer.File>
        ) {
            //console.log(files);
            return this.analisesServie.postTeste(files);
    }
}
