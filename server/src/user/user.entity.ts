import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User{
    @Field()
    login: string;

    @Field()
    name: string;
    
    @Field()
    email: string;
}