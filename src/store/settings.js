import {createAction} from '../helpers/actionHelper';
import {loadState} from '../helpers/localStorage';

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
export const CHANGE_SETTINGS_DEFAULT = 'CHANGE_SETTINGS_DEFAULT';
export const changeSettings = createAction(CHANGE_SETTINGS);

export let defaultSettings = {
  userName: 'UNKNOWN',
  isLight: 'true',
  is12Hours: 'false',
  isShortCut: 'false',
  language: 'English',
}

export let initialState = {...defaultSettings};

const prevSettings = loadState();
if(prevSettings) {
  initialState = {...initialState, ...prevSettings};
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SETTINGS:
      const { name, value } = payload;
      return {
        ...state,
        [name]: value
      };

    case CHANGE_SETTINGS_DEFAULT:
      return {
        ...state,
        ...defaultSettings
      };

    default:
      return state;
  }
};

export default reducer
