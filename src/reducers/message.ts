import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types';

const initialState = {};

interface Message {
  type: string;
  payload: string;
}

export default function sendMessage(action: Message, state = initialState) {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: '' };
    default:
      return state;
  }
}
