import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';


@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
