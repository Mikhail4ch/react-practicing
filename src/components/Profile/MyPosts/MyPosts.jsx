import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button> Add post </button>
        <button> Remove </button>
      </div>
        <div className={styles.item}>
          <Post message='Hi, degens !' like='10'/>
          <Post message='When is airdrop coming, dude?' like='15'/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>
  )
}

export default MyPosts;