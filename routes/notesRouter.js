import { Router } from 'express';
import { getNotes, createNote, updateNote, deleteNote} from '../controllers/noteController.js';

const notesRouter = new Router();

notesRouter.get('/', getNotes);
notesRouter.post('/', createNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

export default notesRouter;