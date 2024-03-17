import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return <div>
    <div>
      <img alt='feast' className={styles.img1} src='https://static.themoscowtimes.com/image/1360/9c/resizedArabiantable002.jpg' />
    </div>
    <div className={styles.descriptionBlock}>
      <img alt='atom' className={styles.img2} src='https://www.datacoinz.com/wp-content/uploads/2017/11/Atomic-Coin.png' /> + description
    </div>
  </div>
}

export default ProfileInfo;