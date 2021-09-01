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
    /*MongooseModule.forRoot('mongodb+srv://DB-User:xqfCsYXxLCrINUbW@images.15rde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  */],
})
export class AppModule {}
