import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, uppdateMessageActionCreator } from '../../redux/dialog-reducer';


const  DialogsContainer= ({store}) => {

    let state = store.getState().dialog

    let addNewMessage = () => {
        store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (newText) => {
        store.dispatch(uppdateMessageActionCreator(newText))
    }


    return (
        <Dialogs addMessage = {addNewMessage} uppdateMessage = {onMessageChange} 
        dialog = {state}/>
    )
}

export default DialogsContainer