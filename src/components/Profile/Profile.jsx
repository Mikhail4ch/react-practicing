import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css'

const Profile = () => {
  return <div>
    <div>
      <img alt='feast' className={styles.img1} src='https://static.themoscowtimes.com/image/1360/9c/resizedArabiantable002.jpg' />
    </div>
    <div>
      <img alt='atom' className={styles.img2} src='https://www.datacoinz.com/wp-content/uploads/2017/11/Atomic-Coin.png' /> 
    </div>
    <MyPosts/>
  </div>
}

export default Profile;