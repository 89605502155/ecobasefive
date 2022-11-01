import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  login: string

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string

  @IsNotEmpty()
  @IsString()
  @Field()
  name: string

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string

  @IsNotEmpty()
  @IsString()
  @Field()
  surname: string

  @IsString()
  @Field()
  country: string

  @IsString()
  @Field()
  university: string
}
