export const dbConfig = {
	HOST: 'localhost',
	USER: 'postgres',
	PASSWORD: '',
	DB: 'book_mgmt',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
