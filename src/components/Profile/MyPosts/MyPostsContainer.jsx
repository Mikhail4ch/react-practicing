import React from 'react';
import { addPostActionCreator, uppdateTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = ({store}) => {

let state = store.getState() 

  let newPost = () => {
    store.dispatch(addPostActionCreator());
  }

  let onPostChange = (newText) => {
    store.dispatch(uppdateTextActionCreator(newText))
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={newPost} 
    postData={state.profile.posts} newPostText={state.profile.newPostText}/>
  )
}

export default MyPostsContainer;