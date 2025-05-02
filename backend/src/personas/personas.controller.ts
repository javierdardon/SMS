import { Controller, Post, Body } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Persona } from '../entities/persona.entity';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  @Post()
  create(@Body() persona: Partial<Persona>): Promise<Persona> {
    return this.personasService.create(persona);
  }
}
