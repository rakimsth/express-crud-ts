import bookModel from './book.model';
import { IBook, DeleteResult } from './book.types';

export const add = async (payload: Required<IBook>): Promise<IBook> => {
	return bookModel.create(payload);
};

export const list = (): Promise<IBook[]> => {
	return bookModel.find();
};

export const getById = (id: String): Promise<IBook | null> => {
	return bookModel.findById(id);
};

export const updateById = (id: String, payload: Partial<IBook>): Promise<IBook | null> => {
	return bookModel.findByIdAndUpdate(id, payload);
};

export const removeById = (id: String): Promise<DeleteResult> => {
	return bookModel.deleteOne({ _id: id });
};
