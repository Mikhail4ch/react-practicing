import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
//import Friend from '../Friends/Friend/Friend';


const Navbar = () => {

    /*let friendsElements = state.sidebar.friends
        .map(friend => <Friend friend={friend.name} id={friend.id} />)*/


    return (
        <>
            < nav className={styles.nav} >
                <div className={styles.item}>
                    <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="News" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}> News </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/Music" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}>Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/Settings" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}> Settings</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/Friends" className={({ isActive }) => (isActive ? styles.activeLink : styles.item)}> Friends</NavLink>
                </div>
            </nav>
        </>
    )
}



export default Navbar;