import { Field, ObjectType } from '@nestjs/graphql';
import { Entity,  Column, ManyToOne } from "typeorm"
import { StationEntity } from './station.entity'

@ObjectType()
@Entity({name:"depth"})
export class DepthEntity {
    @Field()
    @Column()
    depth: number;

    @Field()
    @Column()
    salinity?: number

    @Field()
    @Column()
    DOC?: number

    @ManyToOne(()=>StationEntity,(station)=>station.depths)
    station: StationEntity

}