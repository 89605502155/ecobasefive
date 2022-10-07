import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StationModule } from './station/station.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from './config/db.config';
import { UserModule } from './user/user.module';
import { PointModule } from './point/point.module';
import { DotdepthModule } from './dotdepth/dotdepth.module';
import { ExpeditionsModule } from './expeditions/expeditions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath:'../.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: true,
        playground: true,
        autoSchemaFile: 'sheme.gql',
        sortSchema: true
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig
    }),
    StationModule,
    UserModule,
    PointModule,
    DotdepthModule,
    ExpeditionsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
