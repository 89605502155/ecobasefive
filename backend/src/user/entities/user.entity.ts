import { ObjectType, Field,  registerEnumType } from '@nestjs/graphql';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Dotdepth } from 'src/dotdepth/entities/dotdepth.entity';

export enum Status {
  Admin='Admin',
  Editor='Editor',
  Client='Client',
  Guest='Guest'
}
registerEnumType(Status,{
  name:'Status'
});

@ObjectType()
@Table({
  tableName: 'Users',
  deletedAt: false,
  version: false
})
export class User extends Model {
  @Field(() => String, { description: 'It is a login of user' })
  @Column({unique: true})
  login: string;
  
  @Field()
  @Column({})
  password: string;

  @Field()
  @Column({})
  surname: string;

  @Field(()=> Status,{nullable:true})
  @Column({
    type: DataType.ENUM(...Object.values(Status)),

  })
  status: Status;

  @Field()
  @Column({})
  country: string;

  @Field()
  @Column({})
  university: string;

  @Field()
  @HasMany(()=> Dotdepth)
  depths: Dotdepth[];
}
