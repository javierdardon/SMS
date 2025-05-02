import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../entities/persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepo: Repository<Persona>,
  ) {}

  create(data: Partial<Persona>): Promise<Persona> {
    const nueva = this.personaRepo.create(data);
    return this.personaRepo.save(nueva);
  }
}
