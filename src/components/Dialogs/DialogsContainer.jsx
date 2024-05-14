import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, uppdateMessageActionCreator } from '../../redux/dialog-reducer';
import StoreContext from '../../storeContext';


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialog
            let addNewMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            let onMessageChange = (newText) => {
                store.dispatch(uppdateMessageActionCreator(newText))
            }
            return <Dialogs addMessage={addNewMessage} uppdateMessage={onMessageChange}
                dialog={state} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer