import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Point } from 'src/point/entities/point.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Table({tableName:'Depths'})
export class Dotdepth extends Model<Dotdepth>{
  @Field(() => ID, { description: 'Unique id' })
  @PrimaryKey
  id: number;

  @Field({nullable:true})
  @Column
  depth:number;

  @Field({nullable:true})
  @Column({allowNull: true})
  salinity?:number;

  @Field({nullable:true})
  @Column({allowNull: true})
  DOC?:number;

  @Field()
  @ForeignKey(()=>Point)
  @Column
  stationName: string;

  @Field()
  @BelongsTo(()=>Point)
  station: Point;

  @Field()
  @ForeignKey(()=>User)
  @Column
  authorId:number;

  @Field()
  @BelongsTo(()=>User)
  author:User;

}
