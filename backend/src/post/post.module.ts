import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { CommentService } from 'src/comment/comment.service';

@Module({
  providers: [CommentService, PostService, PostResolver, DateScalar],
})

export class PostModule { }
