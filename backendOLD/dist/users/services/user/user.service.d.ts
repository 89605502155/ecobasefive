import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    getOneUser(id: number): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    removeUser(id: number): Promise<number>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>;
}
