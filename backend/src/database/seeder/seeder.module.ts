import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { RoleSeederModule } from './role/role.module.seeder';
import { SeederService } from './seeder.service';

@Module({
  imports: [DatabaseModule, RoleSeederModule],
  providers: [SeederService, Logger],
})
export class SeederModule {}
