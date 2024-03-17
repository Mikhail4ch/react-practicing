import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'


const DialogItem = ({ name, id }) => {
    return <div className={styles.dialog}>
        <NavLink to={"/dialogs/" + id}> {name} </NavLink>
    </div>
}

const Message = ({ message }) => {
    return <div className={styles.message}>
        {message}
    </div>
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'LiL Pimp' },
        { id: 2, name: 'No_Axich' },
        { id: 3, name: 'Lehandra' },
        { id: 4, name: 'Papanya' },
        { id: 5, name: 'Tankist' },
        { id: 6, name: 'Metallist' }
    ]

    let messagesData = [
        { id: 1, message: 'How is it going with money?' },
        { id: 2, message: 'What money do you mean?' },
        { id: 3, message: 'This money I mean !' },
        { id: 4, message: 'Arshavin!!' },
        { id: 5, message: 'Kerzakov!' }
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData
        .map(message => <Message message={message.message} id={message.id} />)

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
                </div>
            </div>
        </>
    )
}

export default Dialogs