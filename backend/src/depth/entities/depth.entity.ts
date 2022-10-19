import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Station } from 'src/station/entities/station.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'depth'})
export class Depth {
  @Field(()=>ID)
  @PrimaryGeneratedColumn({name:'id'})
  id: number;

  @Field()
  @Column({name:'depth'})
  depth: number;

  @Field({nullable:true})
  @Column({nullable:true, name:'salinity'})
  salinity: number;

  @Field({nullable:true})
  @Column({nullable:true, name:'DOC'})
  DOC: number;

  @Field(()=>Station)
  @ManyToOne(()=>Station,(station)=>station.depths)
  station: Station;
}
