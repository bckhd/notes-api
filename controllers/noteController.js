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
    try {
        const newNote = await Note.create(title, content);
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};