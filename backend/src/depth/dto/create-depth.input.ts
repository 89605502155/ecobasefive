import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepthInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
