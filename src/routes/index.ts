import express, { Request, Response, Next } from 'express';
import bookRouter from '../modules/books/book.routes.api';
const router = express.Router();

router.use('/books', bookRouter);

export default router;
