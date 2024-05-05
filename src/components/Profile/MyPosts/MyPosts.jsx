import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, uppdateTextActionCreator } from '../../../redux/state';




const MyPosts = ({ postData, newPostText, dispatch }) => {

  let postElements = postData
    .map(post => <Post message={post.message} like={post.like} id={post.id} />)

  let newPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let newText = e.target.value;
    dispatch(uppdateTextActionCreator(newText))
  }



  return (

    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} value={newPostText} />
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