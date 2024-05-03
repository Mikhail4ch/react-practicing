import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = ({ dialogsData, messagesData, newMessageText, dispatch }) => {

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData
        .map(message => <Message message={message.message} id={message.id} />)

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        dispatch ({type: 'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value;
        dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText})
    }


    return (
        <>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>

                    {dialogsElements}

                    {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                </div>
                <div className={styles.messages}>

                    {messagesElements}

                    {/* <Message message={ messageData[0].message} id={ messageData[0].id} />
                    <Message message={ messageData[1].message} id={ messageData[1].id} />
                    <Message message={ messageData[2].message} id={ messageData[2].id} />
                    <Message message={ messageData[3].message} id={ messageData[3].id}/>
                    <Message message={ messageData[4].message} id={ messageData[4].id} />*/}
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageText}></textarea>
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