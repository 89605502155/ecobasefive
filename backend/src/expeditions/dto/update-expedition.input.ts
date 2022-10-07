import { CreateExpeditionInput } from './create-expedition.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExpeditionInput extends PartialType(CreateExpeditionInput) {
  @Field(() => Int)
  id: number;
}
