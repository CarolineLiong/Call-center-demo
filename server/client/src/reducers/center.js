import { USER_SELECTED,
        SEND_MESSAGES,
        UPDATE_LAST_MESSAGE,
        SET_ACTIVE_USER,
        SET_CUSTOMER_INFO,
        UPDATE_NOTES,
        SHOW_MODAL,
      } from '../actions/center';

const initState = {
  activeUser: '',
  customerInfo: {},
  messages: {},
  lastMessages: {},
  notes: {},
  message: '',
  showModal: 'true',
};

// ...state takes the information within the state
// anything after the comma is just a modification
export default function (state = initState, action) {
  switch (action.type) {
    case USER_SELECTED:
      return { ...state, activeUser: action.payload };
    case SEND_MESSAGES:
      return { ...state, messages: action.payload };
    case UPDATE_LAST_MESSAGE:
      return { ...state, lastMessages: action.payload };
    case SET_ACTIVE_USER:
      if (state.activeUser === '') {
        return { ...state, activeUser: action.payload };
      }
      break;
    case SET_CUSTOMER_INFO:
      return { ...state, customerInfo: action.payload };
    case UPDATE_NOTES:
      return { ...state, notes: action.payload };
    case SHOW_MODAL:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
  return state;
}

