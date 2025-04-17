import { Router } from 'express';
import { getNotes, createNote } from '../controllers/noteController.js';

const notesRouter = new Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', createNote);

export default notesRouter;