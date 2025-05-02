import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './create-evento.dto';
import { Evento } from '../entities/evento.entity';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Get()
  getEventos(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }

  @Post()
  async createEvento(@Body() body: CreateEventoDto) {
    return this.eventosService.createEventoConPersonas(body);
  }
}
