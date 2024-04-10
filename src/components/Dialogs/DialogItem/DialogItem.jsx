import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom'


const DialogItem = ({ name, id }) => {
    return <div className={styles.dialog}>
        <NavLink to={"/dialogs/" + id}> {name} </NavLink>
    </div>
}

export default DialogItem