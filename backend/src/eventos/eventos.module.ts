import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from '../entities/evento.entity';
import { Persona } from '../entities/persona.entity';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Evento, Persona])],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
