import { Schema, model } from 'mongoose';
import { IBook } from './book.types';
// 1. Import an interface representing a document in MongoDB.

// 2. Create a Schema corresponding to the document interface.
const bookSchema: Schema = new Schema<IBook>({
	title: { type: String, required: true },
	pages: { type: Number, required: true },
	author: { type: String, required: true },
	excerpt: String,
});

// 3. Create a Model.
export default model<IBook>('Books', bookSchema);
