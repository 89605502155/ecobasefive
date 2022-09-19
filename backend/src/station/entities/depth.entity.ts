import { Field, ObjectType } from '@nestjs/graphql';
import { Entity,  Column, ManyToOne} from "typeorm"
import { StationEntity } from './station.entity'

@ObjectType()
@Entity({name:"depth"})
export class DepthEntity {
    @Field()
    @Column()
    depth: number;

    @Field({nullable:true})
    @Column({nullable:true})
    salinity: number

    @Field({nullable:true})
    @Column({nullable:true})
    DOC: number

    @ManyToOne(()=>StationEntity,(station)=>station.name)
    station: StationEntity

}