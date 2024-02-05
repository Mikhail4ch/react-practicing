import styles from './Header.module.css'

const Header = () => {
    return <header className={styles.header}>
        <img className={styles.headerimg} alt='Ethereum logo' src='https://logos-world.net/wp-content/uploads/2020/12/Ethereum-Emblem.png' />
    </header>
}

export default Header;