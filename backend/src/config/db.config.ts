import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const getSequelizeConfig = async (
    configService: ConfigService
): Promise<SequelizeModuleOptions> => {
    return {
        dialect: 'postgres',
        host: 'localhost',
        port: configService.get('SEQUELIZE_PORT'),
        database: configService.get('SEQUELIZE_DATABASE'),
        username: configService.get('SEQUELIZE_USERNAME'),
        password: configService.get('SEQUELIZE_PASSWORD'),
        autoLoadModels: true,
        synchronize: true,
        logging: false
    };
};