import { Injectable } from '@nestjs/common';
import { PostsArgs } from './dto/posts.args';
import { Post } from './models/post';

@Injectable()
export class PostService {

  private posts = [
    {
      id: "1",
      user: "Dinesh",
      sender: "asas",
      description: "Look what Gilfoyle just told me",
      image: "https://picsum.photos/200",
      creationDate: new Date(),
      comments: ["1", "2", "3"],
    },
    {
      id: "2",
      user: "Gilfoyle",
      sender: "asas",
      description: "My AI is chatting with Dinesh, He thinks that it's me",
      image: "https://picsum.photos/200",
      creationDate: new Date(),
      comments: ["4", "5"],
    },
    {
      id: "3",
      user: "Richard",
      sender: "asas",
      description: "Middle out compression algorithm",
      image: "https://picsum.photos/200",
      creationDate: new Date(),
      comments: ["6"],
    },
  ]

  async findOneById(id: string): Promise<Post> {
    return this.posts.find(p => p.id === id);
  }

  async findAll(postsArgs: PostsArgs): Promise<Post[]> {
    return this.posts;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
