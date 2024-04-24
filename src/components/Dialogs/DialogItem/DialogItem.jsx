import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom'


const DialogItem = ({ name, id }) => {
    return <div className={styles.dialog}>
        <img alt='ava' src='https://i.etsystatic.com/13554046/r/il/80139e/2788422650/il_1140xN.2788422650_akq7.jpg' />
        <NavLink to={"/dialogs/" + id}> {name} </NavLink>
    </div>
}

export default DialogItem