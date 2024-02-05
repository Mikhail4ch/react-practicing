import styles from './Navbar.module.css'

const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.item}>
            <a href>Profile</a>
        </div>
        <div className={styles.item}>
            <a href>Messages</a>
        </div>
        <div className={styles.item}>
            <a href> News </a>
        </div>
        <div className={styles.item}>
            <a href>Music</a>
        </div>
        <div className={styles.item}>
            <a href> Settings</a>
        </div>
    </nav>
}

export default Navbar;