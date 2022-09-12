import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { DepthEntity } from './depth.entity';
// import { IDepth } from './depth.interface';

@ObjectType()
@Entity({name:"station"})
export class StationEntity {
    @Field()
    @PrimaryGeneratedColumn()
    name: string;

    @Field()
    @Column({ length: 500 })
    longitude: number;

    @Field()
    @Column()
    latitude: number;

    // @Column()
    // depths: IDepth[];

    @OneToMany(()=>DepthEntity, (depths)=>depths.station)
    depths?: DepthEntity[]

    @Field()
    @CreateDateColumn({name:'createdAt'})
    createdAt: Date;

    @Field()
    @UpdateDateColumn({name:'updateAt'})
    updateAt: Date;

}