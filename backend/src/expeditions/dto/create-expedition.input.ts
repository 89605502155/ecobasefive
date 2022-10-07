import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExpeditionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
