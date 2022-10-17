import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import configuration from './config/configuration';
import { AppDataSource } from 'ormconfig';
import { StationModule } from './station/station.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: true,
        playground: true,
        autoSchemaFile: 'sheme.gql',
        sortSchema: true
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config:ConfigService) => (AppDataSource.options),
    }),
    StationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
