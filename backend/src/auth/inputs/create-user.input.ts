import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsNotEmpty()
    @Field()
    name: string;

    @IsNotEmpty()
    @Field()
    login: number;

    @IsNotEmpty()
    @Field()
    password: string;

    @IsNotEmpty()
    @Field()
    surname: string;

    @IsNotEmpty()
    @IsEmail()
    @Field()
    email: string;

    @IsNotEmpty()
    @Field()
    country: string;

    @IsNotEmpty()
    @Field()
    university: string;
}