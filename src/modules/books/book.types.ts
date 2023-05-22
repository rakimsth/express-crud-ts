import { Document } from 'mongoose';

export interface IBook extends Document {
	title: string;
	pages: number;
	author: string;
	excerpt?: string;
}

export interface DeleteResult {
	acknowledged: boolean;
	deletedCount?: number;
}
