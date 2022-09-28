import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UserResponseInterface } from './types/user-response.interface';
import { CreateUserInput } from './inputs/create-user.input';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private configService: ConfigService
    ){}
    async createUser(createUserInput: CreateUserInput):Promise<UserEntity>{
        const userByEmal = await this.userRepository.findOne({where:{
            email: createUserInput.email
        }});
        const userByLogin = await this.userRepository.findOne({where:{
            login: createUserInput.login
        }});
        if (userByEmal || userByLogin){
            throw new HttpException('Email or login are taken', HttpStatus.UNPROCESSABLE_ENTITY);
        }


        const newUser= new UserEntity();
        Object.assign(newUser, createUserInput);
        return await this.userRepository.save(newUser);
    }
    generateJwt(user: UserEntity):string{
        return sign({
            login: user.login,
            emeil: user.email,
            country: user.country,
            university: user.university,
            status: user.status
        // }, this.configService.get<string>('JWT_SECRET')
        },'laser');
    }

    buildUserResponse(user: UserEntity): UserResponseInterface{
        return {
            user: {
                ...user,
                token: this.generateJwt(user)
            }
        };
    }
}
