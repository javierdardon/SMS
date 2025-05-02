import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from './evento.entity';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dpi: string;

  @Column()
  telefono: string;

  @Column('text')
  direccion: string;

  @ManyToOne(() => Evento, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'evento_id' })
  evento: Evento;
}
