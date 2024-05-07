import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

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

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialog = dialogReducer(this._state.dialog, action);
        this._rerenderEntireTree(this.getState())
    }
}

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