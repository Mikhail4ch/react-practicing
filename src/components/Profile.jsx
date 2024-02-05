import styles from './Profile.module.css'

const Profile = () => {
  return <div className='content'>
    <div>
      <img alt='feast' className={styles.img} src='https://static.themoscowtimes.com/image/1360/9c/resizedArabiantable002.jpg' />
    </div>
    <div>
      <img alt='atom' src='https://www.datacoinz.com/wp-content/uploads/2017/11/Atomic-Coin.png' /> Description
    </div>
    <div>
      My posts
    </div>
    <div>
      New post
    </div>
    <div className='posts'>
      <div className={styles.item}>
        Post 1
      </div>
      <div className={styles.item}>
        Post 2
      </div>
    </div>
  </div>
}

export default Profile;