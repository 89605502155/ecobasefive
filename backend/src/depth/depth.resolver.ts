import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepthService } from './depth.service';
import { Depth } from './entities/depth.entity';
import { CreateDepthInput } from './dto/create-depth.input';
import { UpdateDepthInput } from './dto/update-depth.input';

@Resolver(() => Depth)
export class DepthResolver {
  constructor(private readonly depthService: DepthService) {}

  @Mutation(() => Depth)
  createDepth(@Args('createDepthInput') createDepthInput: CreateDepthInput) {
    return this.depthService.create(createDepthInput);
  }

  @Query(() => [Depth], { name: 'depth' })
  findAll() {
    return this.depthService.findAll();
  }

  @Query(() => Depth, { name: 'depth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.depthService.findOne(id);
  }

  @Mutation(() => Depth)
  updateDepth(@Args('updateDepthInput') updateDepthInput: UpdateDepthInput) {
    return this.depthService.update(updateDepthInput.id, updateDepthInput);
  }

  @Mutation(() => Depth)
  removeDepth(@Args('id', { type: () => Int }) id: number) {
    return this.depthService.remove(id);
  }
}
