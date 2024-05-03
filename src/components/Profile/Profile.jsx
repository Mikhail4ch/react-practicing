import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postData, newPostText, dispatch }) => {
  
  return <div>
    <ProfileInfo />
    <MyPosts postData = {postData} dispatch = {dispatch} newPostText = {newPostText} />
  </div>
}

export default Profile
