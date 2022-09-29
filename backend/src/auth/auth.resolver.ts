import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/create-user.input';
import { ReturnAfterCreatingInput } from './entities/return-after-creating.entity';

@Resolver('User')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ){}

    @Mutation(()=> ReturnAfterCreatingInput)
    async createUser(@Args('createUser') createUserInput: CreateUserInput){
        const user = await this.authService.createUser(createUserInput);
        return this.authService.buildUserResponse(user);
        // return user;
    }
}
