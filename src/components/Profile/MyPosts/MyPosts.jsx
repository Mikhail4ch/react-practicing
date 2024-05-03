import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = ({postData, newPostText, dispatch}) => {

  let postElements = postData
  .map(post => <Post message={post.message} like={post.like} id={post.id} />)
  
  let newPostElement = React.createRef();

  let newPost = () => {
    dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newText})
  }

 

  return (

    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
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