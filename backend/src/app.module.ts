import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StationModule } from './modules/station/station.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { GraphQL } from './config';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath:'../.env' }),
    GraphQL,
    RoleModule,
    StationModule,
    AuthModule,
    DatabaseModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  static host: string;
    static port: number;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get('HOST');
        AppModule.port = +this.configService.get('PORT');
    }
}
