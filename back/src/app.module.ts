import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StationModule } from './station/station.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';


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
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//8/38

//"typeorm": "typeorm-ts-node-commonjs",
