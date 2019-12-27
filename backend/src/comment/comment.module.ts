import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])],
  providers: [CommentResolver, CommentService, DateScalar],
})

export class CommentModule { }
