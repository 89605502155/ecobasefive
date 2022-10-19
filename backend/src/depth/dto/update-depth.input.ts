import { CreateDepthInput } from './create-depth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepthInput extends PartialType(CreateDepthInput) {
  @Field(() => Int)
  id: number;
}
