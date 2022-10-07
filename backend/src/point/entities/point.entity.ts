import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Dotdepth } from 'src/dotdepth/entities/dotdepth.entity';

@ObjectType()
@Table({
  tableName:'Stations'
})
export class Point extends Model<Point> {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @Column({  })
  name: string;

  @Field()
  @Column({field:'longitude'})
  longitude: number;

  @Field()
  @Column({field:'latitude'})
  latitude: number;

  @Field()
  @HasMany(()=> Dotdepth)
  depths: Dotdepth[];
}
