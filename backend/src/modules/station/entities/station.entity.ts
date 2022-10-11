import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { DepthEntity } from 'src/modules/depth/entities/depth.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
// import { IDepth } from './depth.interface';

@ObjectType()
@Entity({name:'station'})
export class StationEntity {
    @Field()
    @PrimaryColumn({name:'name'})
    name: string;

    @Field()
    @Column({name:'longitude'})
    longitude: number;

    @Field()
    @Column({name:'latitude'})
    latitude: number;

    // @Column()
    // depths: IDepth[];

    // @OneToMany(()=>DepthEntity, (depths)=>depths.station)
    // depths: DepthEntity[]

    @Field(()=>[DepthEntity], {nullable:true})
    @OneToMany(()=>DepthEntity, (depths)=>depths.station, {nullable:true})
    depths?: DepthEntity[];

}