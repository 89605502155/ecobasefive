import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('TYPEORM_HOST'),
  port: +configService.get('TYPEORM_PORT'),
  username: 'root',
  password: 'qwerty',
  database: 'rusocean2',
  synchronize: configService.get('TYPEORM_SYNC') === 'true' ? true : false,
  cache: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  extra: {
    trustServerCertificate: true,
  },
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'migration_history',
});