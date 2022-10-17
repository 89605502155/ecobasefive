import { InputType,  Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateStationInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  longitude: number;

  @Field()
  @IsNotEmpty()
  latitude: number;
}
