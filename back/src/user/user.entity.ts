import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
// import { IDepth } from './depth.interface';

export enum UserRole {
    ADMIN="admin",
    EDITOR="editor",
    GUEST="guest"
}

@ObjectType()
@Entity({name:"user"})
export class UserEntity {
    @Field()
    @PrimaryGeneratedColumn()
    login: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column()
    rememberTocken: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    country: string;

    @Field()
    @Column()
    university: string;

    @Field()
    @Column()
    department: string;

    @Field()
    @Column({
        type: "set",
        enum: UserRole,
        default: UserRole.GUEST
    })
    roles: UserRole

    @Field()
    @Column({
        default: false
    })
    isVerified: boolean;

    @Field()
    @CreateDateColumn({name:'createdAt'})
    createdAt: Date;

}

//- ./pgdata:/var/lib/postgresql/data