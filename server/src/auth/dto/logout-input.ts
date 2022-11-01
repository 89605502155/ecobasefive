import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LogoutInput{
    @Field()
    login: string;
}