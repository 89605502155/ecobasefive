import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationModule } from './station/station.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DepthModule } from './depth/depth.module';

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
	TypeOrmModule.forRootAsync({
		imports: [ConfigModule],
		inject: [ConfigService],
		useFactory: async (config:ConfigService) => ({
		type: config.get<'aurora-postgres'>('TYPEORM_CONNECTION'),
				username: config.get<string>('TYPEORM_USERNAME'),
				password: config.get<string>('TYPEORM_PASSWORD'),
				database: config.get<string>('TYPEORM_DATABASE'),
				port: config.get<number>('TYPEORM_PORT'),
				entities: [ __dirname + 'dist/**/*.entity{.ts,.js}' ],
				synchronize: true,
		// migrations:[__dirname + 'dist/**/*.migration{.ts,.js}'],
				autoLoadEntities: true,
				logging: true,
		})
	}),
	StationModule,
	DepthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
