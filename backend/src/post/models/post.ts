import { Field, ID, ObjectType } from 'type-graphql';
import { Comment } from '../../comment/models/comment'

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  user: string;

  @Field()
  sender: string;

  @Field()
  image: string;

  @Field()
  creationDate: Date;

  @Field(type => [Comment])
  comments: string[];
}
