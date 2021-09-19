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
<<<<<<< HEAD
    /*MongooseModule.forRoot('mongodb+srv://DB-User:xqfCsYXxLCrINUbW@images.15rde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  */],
=======
    //MongooseModule.forRoot('mongodb+srv://DB-User:xqfCsYXxLCrINUbW@images.15rde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
>>>>>>> 6dff26eb7f6115a4b4a09402f8b385a89b335a3a
})
export class AppModule {}
