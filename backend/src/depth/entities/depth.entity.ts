import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity,  Column,  PrimaryGeneratedColumn} from "typeorm"

@ObjectType()
@Entity({name:"depth"})
export class DepthEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn({name:"id"})
    id: number;

    @Field()
    @Column({name:"depth"})
    depth: number;

    @Field({nullable:true})
    @Column({nullable:true, name:"salinity"})
    salinity: number;

    @Field({nullable:true})
    @Column({nullable:true, name:"DOC"})
    DOC: number;

    // @Field(()=>StationEntity)
    // @ManyToOne(()=>StationEntity,(station)=>station.name)
    // station: string

    @Field()
    @Column({name:"station"})
    station:string;

}