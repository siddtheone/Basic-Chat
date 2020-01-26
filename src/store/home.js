import {v4} from 'uuid';
import {SOCKET} from '../constants';
import {createAction} from '../helpers/actionHelper';

export const CHANGE_HOME = 'CHANGE_HOME';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_OWN_MESSAGE = 'ADD_OWN_MESSAGE';
export const changeHome = createAction(CHANGE_HOME);
export const addMessage = createAction(ADD_MESSAGE);
export const addOwnMessage = createAction(ADD_OWN_MESSAGE);

export const initialState = {
  message: '',
  messages: [],
  ownMessages: [],
  unread: 0,
};

export const sendMessage = (message, username) => {
  return dispatch => {
    const toSend = {
      date: new Date().getTime(),
      chatId: v4(),
      username,
      message
    }
    SOCKET.emit("message", toSend);
    dispatch(addOwnMessage(toSend.chatId));
    dispatch(changeHome({name: 'message', value: ''}));
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_HOME:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };

    case ADD_OWN_MESSAGE:
      return {
        ...state,
        ownMessages: [...state.ownMessages, payload],
      };

    default:
      return state;
  }
};

export default reducer;
