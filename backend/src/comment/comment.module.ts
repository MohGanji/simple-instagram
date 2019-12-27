import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentResolver, CommentService, DateScalar],
})

export class CommentModule { }
