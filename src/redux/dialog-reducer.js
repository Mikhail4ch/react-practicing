const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newOne = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newOne);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogReducer