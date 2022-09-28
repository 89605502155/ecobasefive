import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

export enum Status {
    Admin,
    Editor,
    Client,
    Guest
}

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn({name: 'login'})
    login: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword(){
        this.password = await hash(this.password, 10);
    }

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column({default: Status.Client})
    status: Status;

    @Column()
    country: string;

    @Column()
    university: string;

    @Column({default: false})
    confirmed: boolean;


}