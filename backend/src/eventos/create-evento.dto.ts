export class CreateEventoDto {
    fecha: string;
    razon: string;
    personas: {
      nombre: string;
      apellido: string;
      dpi: string;
      telefono: string;
      direccion: string;
    }[];
  }
  