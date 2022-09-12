import { ConfigService } from '@nestjs/config';
import { registerAs } from '@nestjs/config';
// import { createConnection } from 'net';
import { DATA_SOURCE } from 'src/constant';
import { DataSource } from 'typeorm';

export const databaseProviders = registerAs('database',()=>([
  {
    provide: DATA_SOURCE,
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        // type: "postgres",
        // host: "localhost",
        // port: 5432,
        // username: 'root',
        // password: 'root',
        // database: 'test',
        // entities: [
        //     __dirname + '/../**/*.entity{.ts,.js}',
        // ],
        // synchronize: true,

        type: config.get<"postgres">('TYPEORM_CONNECTION'),
        // type: config.get('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        // autoLoadEntities: true,
        logging: true,
      })
    
      return dataSource.initialize();
    },
  },
]));
