import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private configService: ConfigService
    ){}
    async generateJwt(user: UserEntity):Promise<string>{
        return sign({
            login: user.login,
            emeil: user.email,
            country: user.country,
            university: user.university,
            status: user.status
        }, this.configService.get<string>('JWT_SECRET'));
    }

    async buildUserResponse(user: UserEntity){
        return {
            user: {
                ...user,
                token: this.generateJwt(user)
            }
        };
    }
}
