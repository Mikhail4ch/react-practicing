import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = ({ postData, addPost, updateNewPostText }) => {

  let postElements = postData.posts
    .map(post => <Post message={post.message} like={post.like} id={post.id} />)

  let newPost = () => {
    addPost();
  }

  let onPostChange = (e) => {
    let newText = e.target.value;
    updateNewPostText(newText);
  }



  return (

    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} value={postData.newPostText} />
        </div>
        <div>
          <button onClick={newPost}> Add post </button>
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