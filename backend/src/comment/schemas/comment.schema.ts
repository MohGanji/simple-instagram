import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  user: String,
  text: String,
  image: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export interface iComment extends mongoose.Document {
  id: string,
  user: string,
  text: string,
  postId: string,
  creationDate: Date,
}

CommentSchema.virtual('id').get(function getId() {
  return this._id.toString()
})