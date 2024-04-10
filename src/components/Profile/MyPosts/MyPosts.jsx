import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = ({postData}) => {

  let postElements = postData
  .map(post => <Post message={post.message} like={post.like} id={post.id} />)
  
  return (

    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button> Add post </button>
          <button> Remove </button>
        </div>
      </div>
      <div className={styles.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;