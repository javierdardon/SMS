import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from '../entities/evento.entity';
import { Persona } from '../entities/persona.entity';
import { CreateEventoDto } from './create-evento.dto';


@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepo: Repository<Evento>,

    @InjectRepository(Persona)
    private readonly personaRepo: Repository<Persona>,
  ) {}

  findAll(): Promise<Evento[]> {
    return this.eventoRepo.find();
  }

  async createEventoConPersonas(dto: CreateEventoDto): Promise<Evento> {
    const evento = this.eventoRepo.create({ fecha: dto.fecha, razon: dto.razon });
    const eventoGuardado = await this.eventoRepo.save(evento);

    const personas = dto.personas.map((p) =>
      this.personaRepo.create({ ...p, evento: eventoGuardado }),
    );

    await this.personaRepo.save(personas);

    return eventoGuardado;
  }
}
