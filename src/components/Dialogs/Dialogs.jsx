import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, uppdateMessageActionCreator } from '../../redux/state';


const Dialogs = ({ dialogsData, messagesData, newMessageText, dispatch }) => {

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData
        .map(message => <Message message={message.message} id={message.id} />)

    let addNewMessage = () => {
        dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        dispatch(uppdateMessageActionCreator(newText))
    }


    return (
        <>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={onMessageChange}  value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessage}> Write message </button>
                        <button> Remove </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs