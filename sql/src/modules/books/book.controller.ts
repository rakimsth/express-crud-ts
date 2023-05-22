import { Identifier } from 'sequelize';
import Book from '../../models/book.model';

import { IBook } from './book.types';

export const add = async (payload: Required<IBook>): Promise<IBook> => {
	console.log('here', payload);
	return Book.create(payload);
};

export const list = (): Promise<IBook[]> => {
	return Book.findAll();
};

export const getById = (id: Identifier): Promise<IBook | null> => {
	return Book.findByPk(id);
};

export const updateById = (id: Identifier, payload: Partial<IBook>): Promise<Identifier[] | null> => {
	return Book.update(payload, { where: { id } });
};

export const removeById = (id: Identifier): Promise<Identifier | null> => {
	return Book.destroy({
		where: { id },
	});
};
