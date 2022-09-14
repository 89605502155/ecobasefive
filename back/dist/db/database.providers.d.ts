import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
export declare const databaseProviders: (() => {
    provide: string;
    useFactory: (config: ConfigService) => Promise<DataSource>;
}[]) & import("@nestjs/config").ConfigFactoryKeyHost<{
    provide: string;
    useFactory: (config: ConfigService) => Promise<DataSource>;
}[]>;
