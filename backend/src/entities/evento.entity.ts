import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eventos')
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'varchar', length: 255 })
  razon: string;
}
