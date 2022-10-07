import { CreateDotdepthInput } from './create-dotdepth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDotdepthInput extends PartialType(CreateDotdepthInput) {
  @Field(() => Int)
  id: number;
}
