import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StationModule } from './station/station.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    StationModule,UserModule, AuthModule,
    ConfigModule.forRoot({isGlobal: true, envFilePath: '../.env'}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'sheme.gql'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        // type: config.get<"aurora-postgres">('TYPEORM_CONNECTION'),
        type: config.get<"postgres">('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        migrations: [__dirname + 'dist/**/*.migration{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,

      })
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//6/21

//"typeorm": "typeorm-ts-node-commonjs",
