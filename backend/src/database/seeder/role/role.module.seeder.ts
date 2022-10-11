import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleSeederService } from './role.service.seeder';

@Module({
  imports; [TypeOrmModule.forFeature([Role])],
  providers: [RoleSeederService],
  exports: [RoleSeederService]
})
export class RoleSeederModule {}
