import omit from 'lodash/omit';

// Import Actions
import { CREATE_NOTES, CREATE_NOTE, EDIT_NOTE, UPDATE_NOTE, DELETE_NOTE } from './NoteActions';

// Initial State
const initialState = {};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTES:
      return { ...action.notes };

    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };

    case EDIT_NOTE: {
      const note = { ...state[action.id], editing: true };
      return { ...state, [action.id]: note };
    }

    case DELETE_NOTE:
      return omit(state, action.noteId);

    default:
      return state;
  }
}