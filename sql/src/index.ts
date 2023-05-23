import express, { Application } from 'express';
import router from './routes';

import models from './models';

const app: Application = express();

const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use('/api/v1', router);

models
	.authenticate()
	.then(function () {
		console.log('Connection successful');
	})
	.catch(function (error) {
		console.log('Error creating connection:', error);
	});

models
	.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Example SQL app listening on port ${port}`);
		});
	})
	.catch(err => console.log('Error: ' + err));
