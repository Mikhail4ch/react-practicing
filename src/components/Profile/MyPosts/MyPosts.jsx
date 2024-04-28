import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = ({postData, addPost}) => {

  let postElements = postData
  .map(post => <Post message={post.message} like={post.like} id={post.id} />)
  
  let newPostElement = React.createRef();

  let newPost = () => {
    let postMessage = newPostElement.current.value 
    addPost(postMessage)
    newPostElement.current.value = '';
  }

  return (

    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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