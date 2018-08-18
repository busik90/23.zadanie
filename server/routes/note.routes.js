import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a Note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit Note task
router.route('/notes/:noteId/').put(NoteController.editNoteTask);

export default router;
