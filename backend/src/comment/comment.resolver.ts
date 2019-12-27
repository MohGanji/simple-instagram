import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Comment } from './models/comment';
import { CommentsArgs } from './dto/comments.args';
import { CommentService } from './comment.service';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commentsService: CommentService) { }

  @Query(returns => Comment)
  async comment(@Args('id') id: string): Promise<Comment> {
    const comment = await this.commentsService.findOneById(id);
    if (!comment) {
      throw new NotFoundException(id);
    }
    return comment;
  }

  @Query(returns => [Comment])
  comments(@Args() commentsArgs: CommentsArgs): Promise<Comment[]> {
    return this.commentsService.findPostComments(commentsArgs);
  }

}