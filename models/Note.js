import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class Note {
    static async getAll() {
        return await prisma.note.findMany();
    }

    static async create(title, content) {
        return await prisma.note.create({
            data: { title, content }
        });
    }

    static async update(id, title, content) {
        return await prisma.note.update({
            where: { id: Number(id) },
            data: { title, content }
        });
    }

    static async delete(id) {
        return await prisma.note.delete({
            where: { id: Number(id) }
        });
    }
}