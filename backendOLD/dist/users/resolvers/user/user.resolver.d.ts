import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';
import { UserService } from 'src/users/services/user/user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<UserEntity>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity>;
    removeUser(id: number): Promise<number>;
    getOneUser(id: number): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
}
