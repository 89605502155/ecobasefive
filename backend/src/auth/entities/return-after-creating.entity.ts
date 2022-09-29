import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
export class ReturnAfterCreatingInput extends UserEntity{
    @Field()
    token: string;
}