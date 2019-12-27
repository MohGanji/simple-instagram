import { Injectable } from '@nestjs/common';
import { CommentsArgs } from './dto/comments.args';
import { Comment } from './models/comment';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { iComment } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly CommentModel: Model<iComment>
  ) {

  }

  // private comments = [
  // {
  //   id: "1",
  //   text: "You dumb",
  //   postId: "1",
  //   user: "Foo",
  //   creationDate: new Date()
  // },
  // {
  //   id: "2",
  //   text: "Really?",
  //   postId: "1",
  //   user: "Bar",
  //   creationDate: new Date()
  // },
  // {
  //   id: "3",
  //   text: "I don't think that's him",
  //   postId: "1",
  //   user: "Foo",
  //   creationDate: new Date()

  // },
  // {
  //   id: "4",
  //   text: "HAHAHA",
  //   postId: "2",
  //   user: "Foo",
  //   creationDate: new Date()
  // },
  // {
  //   id: "5",
  //   text: "good job on that",
  //   postId: "2",
  //   user: "Foo",
  //   creationDate: new Date()
  // },
  // {
  //   id: "6",
  //   text: "You are a genius",
  //   postId: "3",
  //   user: "Bazz",
  //   creationDate: new Date()
  // },
  // ]

  async findOneById(id: string): Promise<Comment> {
    return this.CommentModel.findById(id)
  }

  async findPostComments(commentsArgs: CommentsArgs): Promise<Comment[]> {
    return this.CommentModel.find({ postId: commentsArgs.postId }).skip(commentsArgs.skip).limit(commentsArgs.take)
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
