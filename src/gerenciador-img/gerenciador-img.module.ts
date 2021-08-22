import { Module } from '@nestjs/common';
import { GerenciadorImgService } from './gerenciador-img.service';
import { GerenciadorImgController } from './gerenciador-img.controller';
import { AnalisesService } from 'src/analises/analises.service';

@Module({
  providers: [AnalisesService],
  controllers: [GerenciadorImgController]
})
export class GerenciadorImgModule {}
