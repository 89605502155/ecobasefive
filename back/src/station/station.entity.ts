import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DepthEntity } from './depth.entity';
// import { IDepth } from './depth.interface';

@ObjectType()
@Entity({name:"station"})
export class StationEntity {
    @Field()
    @PrimaryGeneratedColumn({name:"name"})
    name: string;

    @Field()
    @Column({name:"longitude"})
    longitude: number;

    @Field()
    @Column({name:"latitude"})
    latitude: number;

    // @Column()
    // depths: IDepth[];

    @OneToMany(()=>DepthEntity, (depths)=>depths.station)
    depths?: DepthEntity[]

}