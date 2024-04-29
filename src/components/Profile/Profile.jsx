import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postData, addPost, newPostText, updateNewPostText }) => {
  
  return <div>
    <ProfileInfo />
    <MyPosts postData = {postData} addPost = {addPost} newPostText = {newPostText} updateNewPostText = {updateNewPostText} />
  </div>
}

export default Profile
