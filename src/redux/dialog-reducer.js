const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'How is it going with money?' },
        { id: 2, message: 'What money do you mean?' },
        { id: 3, message: 'This money I mean !' },
        { id: 4, message: 'Arshavin!!' },
        { id: 5, message: 'Kerzakov!' }
    ],

    dialogs: [
        { id: 1, name: 'LiL Pimp' },
        { id: 2, name: 'No_Axich' },
        { id: 3, name: 'Lehandra' },
        { id: 4, name: 'Papanya' },
        { id: 5, name: 'Tankist' },
        { id: 6, name: 'Metallist' }
    ],
    newMessageText: 'Bryan! When is the drop coming ??'
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newOne = {
                id: 6,
                message: state.newMessageText
            };
          return {
            ...state,
            messages:[...state.messages, newOne],
            newMessageText:'',
          }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const uppdateMessageActionCreator = (newText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText });

export default dialogReducer