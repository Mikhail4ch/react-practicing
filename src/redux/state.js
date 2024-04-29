import { rerenderEntireTree } from "../render";

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
        ]
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

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profile.newPostText ,
        like: 0
    };
    state.profile.posts.push(newPost);
    state.profile.newPostText = ' ';
    rerenderEntireTree(state)
}

export let addMessage = (newMessage) => {
    let newOne = {
        id: 6,
        message: newMessage
    };
    state.dialog.messages.push(newOne);
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText
    rerenderEntireTree(state)
}

export default state;