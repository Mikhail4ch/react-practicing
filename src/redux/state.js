const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {
        profile: {
            posts: [
                { id: 1, message: 'Hi, degens !', like: 10 },
                { id: 2, message: 'When is airdrop coming, dude?', like: 15 },
                { id: 3, message: 'Actually, on the 13th on April.', like: 100 }
            ],
            newPostText: 'ZkSync tomorrow'
        },

        dialog: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'LiL Pimp' },
                { id: 2, name: 'No_Axich' },
                { id: 3, name: 'Lehandra' },
                { id: 4, name: 'Papanya' },
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profile.newPostText,
                like: 0
            };
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = ' ';
            this._rerenderEntireTree(this.getState())
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText
            this._rerenderEntireTree(this.getState())
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newOne = {
                id: 6,
                message: this._state.dialog.newMessageText
            };
            this._state.dialog.messages.push(newOne);
            this._state.dialog.newMessageText = '';
            this._rerenderEntireTree(this.getState())
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialog.newMessageText = action.newText
            this._rerenderEntireTree(this.getState())
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const uppdateTextActionCreator = (newText) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const uppdateMessageActionCreator = (newText) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});

export default store;










/*

let state = {
    profile: {
        posts: [
            { id: 1, message: 'Hi, degens !', like: 10 },
            { id: 2, message: 'When is airdrop coming, dude?', like: 15 },
            { id: 3, message: 'Actually, on the 13th on April.', like: 100 }
        ],
        newPostText: 'ZkSync tomorrow'
    },

    dialog: {
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
    },
    sidebar: {
        friends: [
            { id: 1, name: 'LiL Pimp' },
            { id: 2, name: 'No_Axich' },
            { id: 3, name: 'Lehandra' },
            { id: 4, name: 'Papanya' },
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profile.newPostText,
        like: 0
    };
    state.profile.posts.push(newPost);
    state.profile.newPostText = ' ';
    rerenderEntireTree()
}

export const addMessage = () => {
    let newOne = {
        id: 6,
        message: state.dialog.newMessageText
    };
    state.dialog.messages.push(newOne);
    state.dialog.newMessageText = '';
    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText
    rerenderEntireTree()
}

export const updateNewMessageText = (newText) => {
    state.dialog.newMessageText = newText
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
*/