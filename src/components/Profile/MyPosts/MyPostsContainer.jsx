import { addPostActionCreator, uppdateTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

/*
const MyPostsContaine = () => {

  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState();
      let newPost = () => {
        store.dispatch(addPostActionCreator());
      };

      let onPostChange = (newText) => {
        store.dispatch(uppdateTextActionCreator(newText))
      };

      return <MyPosts updateNewPostText={onPostChange} addPost={newPost}
        postData={state.profile.posts} newPostText={state.profile.newPostText} />
    }
    }
  </StoreContext.Consumer>
} */

const mapStateToProps = (state) => {
  return {
    postData: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (newText) => {
      dispatch(uppdateTextActionCreator(newText))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;