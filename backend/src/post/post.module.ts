import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { CommentService } from 'src/comment/comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schema';
import { CommentSchema } from 'src/comment/schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])
  ],
  providers: [CommentService, PostService, PostResolver, DateScalar],
})

export class PostModule { }
