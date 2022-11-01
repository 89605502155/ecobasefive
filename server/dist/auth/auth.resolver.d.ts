import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignInInput } from './dto/signin-input';
import { LogoutInput } from './dto/logout-input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signUpInput: SignUpInput): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import(".prisma/client").User;
    }>;
    signin(signInInput: SignInInput): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import(".prisma/client").User;
    }>;
    findOne(id: number): string;
    updateAuth(updateAuthInput: UpdateAuthInput): string;
    logout(logoutInput: LogoutInput): Promise<{
        loggedOut: boolean;
    }>;
    getNewTokens(login: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import(".prisma/client").User;
    }>;
}
