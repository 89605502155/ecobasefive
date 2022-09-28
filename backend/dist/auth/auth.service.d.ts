import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { UserResponseInterface } from './types/user-response.interface';
import { CreateUserInput } from './inputs/create-user.input';
export declare class AuthService {
    private readonly userRepository;
    private configService;
    constructor(userRepository: Repository<UserEntity>, configService: ConfigService);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    generateJwt(user: UserEntity): string;
    buildUserResponse(user: UserEntity): UserResponseInterface;
}
