import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerenciadorImgModule } from './gerenciador-img/gerenciador-img.module';
import { AnalisesModule } from './analises/analises.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GerenciadorImgModule,
    AnalisesModule,
  ],
})
export class AppModule {}
