import express from 'express';
import router from './routes';
import mongoose from 'mongoose';

const app = express();

const port = process.env.PORT || 3000;

type Options = {
	autoIndex: boolean;
	maxPoolSize: number;
	serverSelectionTimeoutMS: number;
	socketTimeoutMS: number;
	family: number;
};

const options: Options = {
	autoIndex: false, // Don't build indexes
	maxPoolSize: 10, // Maintain up to 10 socket connections
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	family: 4, // Use IPv4, skip trying IPv6
};

mongoose
	.connect('mongodb://localhost:27017/bookMgmt', options)
	.then(() => {
		console.log('Connected to DB...');
	})
	.catch(error => console.log(error));

app.use(express.json());
app.use('/api/v1', router);

app.listen(port, () => {
	console.log(`Example NoSQL app listening on port ${port}`);
});
