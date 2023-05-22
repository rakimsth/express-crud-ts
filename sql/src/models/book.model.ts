import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

class Book extends Model {
	id: string;
	title: string;
	author: string;
	pages: number;
	excerpt: string;
	createdAt: Date;
	updatedAt: Date;
}

Book.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		pages: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		excerpt: { type: DataTypes.STRING },
	},
	{ sequelize, modelName: 'Book' },
);

export default Book;
