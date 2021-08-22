import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalisesController } from './analises.controller';
import { AnalisesService } from './analises.service';
import { AnaliseSchema } from './schemas/analises.schema';

@Module({
  controllers: [AnalisesController],
  providers: [AnalisesService],
  imports: [
    MongooseModule.forFeature([{ name: 'Analises', schema: AnaliseSchema }])
  ]
})
export class AnalisesModule {}
