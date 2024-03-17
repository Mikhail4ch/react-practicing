import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.nav}>
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
    </nav>
}

export default Navbar;