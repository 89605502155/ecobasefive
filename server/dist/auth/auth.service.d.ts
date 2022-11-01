import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignInInput } from './dto/signin-input';
import { LogoutInput } from './dto/logout-input';
export declare class AuthService {
    private prisma;
    private jwtService;
    private configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
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
    update(id: number, updateAuthInput: UpdateAuthInput): string;
    remove(id: number): string;
    createToken(login: string, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    updateRefreshToken(loginIn: string, refreshToken: string): Promise<void>;
    logout(logoutInput: LogoutInput): Promise<{
        loggedOut: boolean;
    }>;
    getNewTokens(loginIn: string, rt: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import(".prisma/client").User;
    }>;
}
