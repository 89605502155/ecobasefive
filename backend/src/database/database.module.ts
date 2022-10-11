import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.service';
import { SeederModule } from './seeder/seeder.module';

@Global()
@Module({
  imports: [...databaseProviders, SeederModule],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
