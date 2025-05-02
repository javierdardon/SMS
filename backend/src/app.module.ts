import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventosModule } from './eventos/eventos.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mariadb_crud',
      port: 3306,
      username: 'crud_user',
      password: 'crudpass',
      database: 'crud_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EventosModule,
    PersonasModule,
    // Add other modules here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
