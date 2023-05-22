import express, { Request, Response, Next } from 'express';
const router = express.Router();
import * as BookController from './book.controller';

router.post('/', (req: Request, res: Response, next: Next) => {
	BookController.add(req.body)
		.then(d => res.json(d))
		.catch(e => next(e));
});

router.get('/', (req: Request, res: Response, next: Next) => {
	BookController.list()
		.then(d => res.json(d))
		.catch(e => next(e));
});

router.get('/:id', (req: Request, res: Response, next: Next) => {
	const { id } = req.params;
	BookController.getById(id)
		.then(d => res.json(d))
		.catch(e => next(e));
});

router.patch('/:id', (req: Request, res: Response, next: Next) => {
	const { id } = req.params;
	BookController.updateById(id, req.body)
		.then(d => res.json(d))
		.catch(e => next(e));
});

router.delete('/:id', (req: Request, res: Response, next: Next) => {
	const { id } = req.params;
	BookController.removeById(id)
		.then(d => res.json(d))
		.catch(e => next(e));
});

export default router;
