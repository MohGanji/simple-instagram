import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  user: String,
  description: String,
  image: String,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

export interface iPost extends mongoose.Document {
  id: string,
  user: string,
  description: string,
  image: string,
  creationDate: Date
}

PostSchema.virtual('id').get(function getId() {
  return this._id.toString()
})