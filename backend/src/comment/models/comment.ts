import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from '../../post/models/post'

@ObjectType()
export class Comment {
  @Field(type => ID)
  id: string;

  @Field()
  text: string;

  @Field()
  user: string;

  @Field()
  creationDate: Date;
}
