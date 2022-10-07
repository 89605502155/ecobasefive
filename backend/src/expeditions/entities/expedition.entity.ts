import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column } from 'sequelize-typescript';

@ObjectType()
export class Expedition {
  @Field(() => ID, { description: 'id of expeditions' })
  @Column
  id: number;

  @Field({nullable: true})
  @Column({})
  sheep: string;
}
