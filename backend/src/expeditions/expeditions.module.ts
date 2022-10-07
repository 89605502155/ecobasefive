import { Module } from '@nestjs/common';
import { ExpeditionsService } from './expeditions.service';
import { ExpeditionsResolver } from './expeditions.resolver';

@Module({
  providers: [ExpeditionsResolver, ExpeditionsService]
})
export class ExpeditionsModule {}
