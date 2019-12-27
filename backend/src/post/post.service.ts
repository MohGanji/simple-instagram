import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostsArgs } from './dto/posts.args';
import { iPost } from './schemas/post.schema';
import { Post } from './models/post';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly PostModel: Model<iPost>
  ) { }

  // private posts = [
  // {
  //   id: "1",
  //   user: "Dinesh",
  //   sender: "asas",
  //   description: "Look what Gilfoyle just told me",
  //   image: "https://picsum.photos/200",
  //   creationDate: new Date(),
  //   comments: ["1", "2", "3"],
  // },
  // {
  //   id: "2",
  //   user: "Gilfoyle",
  //   sender: "asas",
  //   description: "My AI is chatting with Dinesh, He thinks that it's me",
  //   image: "https://picsum.photos/200",
  //   creationDate: new Date(),
  //   comments: ["4", "5"],
  // },
  // {
  //   id: "3",
  //   user: "Richard",
  //   sender: "asas",
  //   description: "Middle out compression algorithm",
  //   image: "https://picsum.photos/200",
  //   creationDate: new Date(),
  //   comments: ["6"],
  // },
  // ]

  async findOneById(id: string): Promise<iPost> {
    return this.PostModel.findById(id)
  }

  async findAll(postsArgs: PostsArgs): Promise<iPost[]> {
    return this.PostModel.find({}).skip(postsArgs.skip).limit(postsArgs.take);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
