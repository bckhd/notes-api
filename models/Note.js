import { pool } from '../config/db.js';

export default class Note {
    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM notes');
        return rows;
    }

    static async create(title, content) {
        const { rows } = await pool.query(
            'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
            [title, content]
        );
        return rows[0];
    }
}