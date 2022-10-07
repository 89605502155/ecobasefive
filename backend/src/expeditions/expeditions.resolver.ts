import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpeditionsService } from './expeditions.service';
import { Expedition } from './entities/expedition.entity';
import { CreateExpeditionInput } from './dto/create-expedition.input';
import { UpdateExpeditionInput } from './dto/update-expedition.input';

@Resolver(() => Expedition)
export class ExpeditionsResolver {
  constructor(private readonly expeditionsService: ExpeditionsService) {}

  @Mutation(() => Expedition)
  createExpedition(@Args('createExpeditionInput') createExpeditionInput: CreateExpeditionInput) {
    return this.expeditionsService.create(createExpeditionInput);
  }

  @Query(() => [Expedition], { name: 'expeditions' })
  findAll() {
    return this.expeditionsService.findAll();
  }

  @Query(() => Expedition, { name: 'expedition' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.expeditionsService.findOne(id);
  }

  @Mutation(() => Expedition)
  updateExpedition(@Args('updateExpeditionInput') updateExpeditionInput: UpdateExpeditionInput) {
    return this.expeditionsService.update(updateExpeditionInput.id, updateExpeditionInput);
  }

  @Mutation(() => Expedition)
  removeExpedition(@Args('id', { type: () => Int }) id: number) {
    return this.expeditionsService.remove(id);
  }
}
