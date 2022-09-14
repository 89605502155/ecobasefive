"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const station_module_1 = require("./station/station.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            station_module_1.StationModule, user_module_1.UserModule, auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                debug: true,
                playground: true,
                autoSchemaFile: 'sheme.gql'
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    type: config.get('TYPEORM_CONNECTION'),
                    host: config.get('TYPEORM_HOST'),
                    username: config.get('TYPEORM_USERNAME'),
                    password: config.get('TYPEORM_PASSWORD'),
                    database: config.get('TYPEORM_DATABASE'),
                    port: config.get('TYPEORM_PORT'),
                    entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
                    synchronize: true,
                    autoLoadEntities: true,
                    logging: true,
                })
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map