import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DotdepthService } from './dotdepth.service';
import { Dotdepth } from './entities/dotdepth.entity';
import { CreateDotdepthInput } from './dto/create-dotdepth.input';
import { UpdateDotdepthInput } from './dto/update-dotdepth.input';

@Resolver(() => Dotdepth)
export class DotdepthResolver {
  constructor(private readonly dotdepthService: DotdepthService) {}

  @Mutation(() => Dotdepth)
  createDotdepth(@Args('createDotdepthInput') createDotdepthInput: CreateDotdepthInput) {
    return this.dotdepthService.create(createDotdepthInput);
  }

  @Query(() => [Dotdepth], { name: 'dotdepth' })
  findAll() {
    return this.dotdepthService.findAll();
  }

  @Query(() => Dotdepth, { name: 'dotdepth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dotdepthService.findOne(id);
  }

  @Mutation(() => Dotdepth)
  updateDotdepth(@Args('updateDotdepthInput') updateDotdepthInput: UpdateDotdepthInput) {
    return this.dotdepthService.update(updateDotdepthInput.id, updateDotdepthInput);
  }

  @Mutation(() => Dotdepth)
  removeDotdepth(@Args('id', { type: () => Int }) id: number) {
    return this.dotdepthService.remove(id);
  }
}
