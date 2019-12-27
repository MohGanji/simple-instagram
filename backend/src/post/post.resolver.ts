import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { Post } from './models/post';
import { PostsArgs } from './dto/posts.args';
import { PostService } from './post.service';
import { CommentService } from 'src/comment/comment.service';

@Resolver((of) => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) { }

  @Query(returns => Post)
  async post(@Args('id') id: string): Promise<Post> {
    const post = await this.postService.findOneById(id);
    if (!post) {
      throw new NotFoundException(id);
    }
    return post;
  }

  @Query(returns => [Post])
  posts(@Args() postsArgs: PostsArgs): Promise<Post[]> {
    return this.postService.findAll(postsArgs);
  }

  @ResolveProperty()
  async comments(@Parent() post) {
    const { id } = post;
    return await this.commentService.findPostComments({ postId: id });
  }

  @Mutation(returns => Boolean)
  async removePost(@Args('id') id: string) {
    return this.postService.remove(id);
  }

}