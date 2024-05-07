const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        { id: 1, message: 'Hi, degens !', like: 10 },
        { id: 2, message: 'When is airdrop coming, dude?', like: 15 },
        { id: 3, message: 'Actually, on the 13th on April.', like: 100 }
    ],
    newPostText: 'ZkSync tomorrow'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let random = Math.floor(Math.random() * 100); 
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: random
            };
        return {
            ...state,
            posts:[...state.posts,newPost ],
            newPostText: "",    
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
            default:
                return state 
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const uppdateTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: newText });

export default profileReducer;