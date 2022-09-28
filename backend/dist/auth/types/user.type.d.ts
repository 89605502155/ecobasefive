import { UserEntity } from '../entities/user.entity';
export declare type UserType = Omit<UserEntity, 'hashPassword'>;
