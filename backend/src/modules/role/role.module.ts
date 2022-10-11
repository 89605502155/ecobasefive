import { Module } from '@nestjs/common';
import { RoleService } from './services/role.service';
import { RoleResolver } from './resolvers/role.resolver';

@Module({
  providers: [RoleService, RoleResolver]
})
export class RoleModule {}
