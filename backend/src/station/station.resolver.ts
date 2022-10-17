import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StationService } from './station.service';
import { Station } from './entities/station.entity';
import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';

@Resolver(() => Station)
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Mutation(() => Station)
  createStation(@Args('createStationInput') createStationInput: CreateStationInput) {
    return this.stationService.create(createStationInput);
  }

  @Query(() => [Station], { name: 'station' })
  findAll() {
    return this.stationService.findAll();
  }

  @Query(() => Station, { name: 'station' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stationService.findOne(id);
  }

  @Mutation(() => Station)
  updateStation(@Args('updateStationInput') updateStationInput: UpdateStationInput) {
    return this.stationService.update(updateStationInput.id, updateStationInput);
  }

  @Mutation(() => Station)
  removeStation(@Args('id', { type: () => Int }) id: number) {
    return this.stationService.remove(id);
  }
}
