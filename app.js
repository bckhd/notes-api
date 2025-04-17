import express from 'express';
import notesRouter from './routes/notesRouter.js';

const app = express();

const PORT = 8080;

app.use(express.json());
app.use('/notes', notesRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});