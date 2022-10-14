import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum Status {
    Admin,
    Editor,
    Client,
    Guest
}
registerEnumType(Status,{
    name:'Status'
});
@ObjectType()
@Entity({name: 'users'})
export class UserEntity {
    @Field()
    @PrimaryGeneratedColumn()
    login: number;

    @Field()
    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword(){
        this.password = await hash(this.password, 10);
    }

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    surname: string;

    @Field()
    @Column()
    email: string;

    @Field(()=> Status,{nullable:true})
    @Column({nullable:true, default: Status.Client})
    status: Status;

    @Field()
    @Column()
    country: string;

    @Field()
    @Column()
    university: string;

    @Field({nullable:true})
    @Column({nullable:true, default: false})
    confirmed?: boolean;


}