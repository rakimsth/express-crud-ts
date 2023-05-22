import { Model } from 'sequelize';

export interface IBook extends Model {
	title: string;
	pages: number;
	author: string;
	excerpt?: string;
}
