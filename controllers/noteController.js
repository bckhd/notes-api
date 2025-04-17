import Note from '../models/Note.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.getAll();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createNote = async (req, res) => {
    const { title, content } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const newNote = await Note.create(title, content);
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const updatedNote = await Note.update(id, title, content);
        res.json(updateNote);
    } catch(err) {
        if (err.code === 'P2025') {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(500).json({ error: err.message });
    }
};

export const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        await Note.delete(id);
        res.status(204).send();
    } catch(err) {
        if (err.code === 'P2025') {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(500).json({ error: err.message });
    }
};