import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { CreateUserInput } from './inputs/create-user.input';
import { ReturnAfterCreatingInput } from './entities/return-after-creating.entity';
export declare class AuthService {
    private readonly userRepository;
    private configService;
    constructor(userRepository: Repository<UserEntity>, configService: ConfigService);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    generateJwt(user: UserEntity): string;
    buildUserResponse(user: UserEntity): ReturnAfterCreatingInput;
}
