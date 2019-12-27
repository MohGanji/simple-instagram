import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/sinsta', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    PostModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
