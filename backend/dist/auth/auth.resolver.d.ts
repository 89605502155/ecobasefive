import { AuthService } from './auth.service';
import { CreateUserInput } from './inputs/create-user.input';
import { ReturnAfterCreatingInput } from './entities/return-after-creating.entity';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(createUserInput: CreateUserInput): Promise<ReturnAfterCreatingInput>;
}
