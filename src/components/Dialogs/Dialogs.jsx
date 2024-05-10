import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = ({ dialog, addMessage, uppdateMessage}) => {

    

    let dialogsElements = dialog.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = dialog.messages
        .map(message => <Message message={message.message} id={message.id} />)

    let addNewMessage = () => {
        addMessage()
    }

    let onMessageChange = (e) => {
        let newText = e.target.value;
        uppdateMessage(newText)
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
                        <textarea placeholder='Enter your message' onChange={onMessageChange}  value={dialog.newMessageText}></textarea>
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