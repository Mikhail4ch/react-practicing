import Dialogs from './Dialogs';
import { addMessageActionCreator, uppdateMessageActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';


/*const DialogsContainer = () => {

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
} */

let mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        uppdateMessage: (newText) => {
            dispatch(uppdateMessageActionCreator(newText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer