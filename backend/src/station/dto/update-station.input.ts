import { CreateStationInput } from './create-station.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateStationInput extends PartialType(CreateStationInput) {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field({nullable:true})
  longitude: number;

  @Field({nullable:true})
  latitude: number;
}
