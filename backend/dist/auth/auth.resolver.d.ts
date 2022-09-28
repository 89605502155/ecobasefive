import { AuthService } from './auth.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './inputs/create-user.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
}
