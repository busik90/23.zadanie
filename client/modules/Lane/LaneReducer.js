import omit from 'lodash/omit';

// Import Actions
import { CREATE_LANES, CREATE_LANE, EDIT_LANE, UPDATE_LANE, DELETE_LANE } from './LaneActions';
import { CREATE_NOTE, DELETE_NOTE } from '../Note/NoteActions';

// Initial State
const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANES:
      return { ...action.lanes };

    case CREATE_LANE:
    case UPDATE_LANE:
      return { ...state, [action.lane.id]: action.lane };

    case EDIT_LANE: {
      const lane = { ...state[action.id], editing: true };
      return { ...state, [action.id]: lane };
    }

    case DELETE_LANE:
      return omit(state, action.laneId);

    case CREATE_NOTE: {
      const newLane = { ...state[action.laneId] };
      newLane.notes = newLane.notes.concat(action.note.id);

      return { ...state, [action.laneId]: newLane };
    }

    case DELETE_NOTE: {
      const newLane = { ...state[action.laneId] };
      newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);

      return { ...state, [action.laneId]: newLane };
    }

    default:
      return state;
  }
}