import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Depth } from 'src/depth/entities/depth.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'station' })
export class Station {
  @Field(()=>ID)
  @PrimaryGeneratedColumn({name:'id'})
  id: number;

  @Field()
  @PrimaryColumn({name:'name'})
  name: string;

  @Field()
  @Column({name:'longitude'})
  longitude: number;

  @Field()
  @Column({name:'latitude'})
  latitude: number;

  @Field(()=>[Depth], {nullable:true})
  @OneToMany(()=>Depth, (depths)=>depths.station, {nullable:true})
  depths?: Depth[];
}
