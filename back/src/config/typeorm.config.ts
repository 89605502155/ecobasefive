import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions,} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
      return {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT, 5421),
        username: process.env.TYPEORM_USERNAME,
        database: process.env.TYPEORM_DATABASE,
        password: process.env.TYPEORM_PASSWORD,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
        // cli: {
        //   migrationsDir: __dirname + '/../db/migrations',
        // },
        // extra: {
        //   charset: 'utf8mb4_unicode_ci',
        // },
        synchronize: false,
        logging: true,
      };
    },
  };