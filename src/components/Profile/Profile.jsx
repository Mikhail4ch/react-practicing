import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postData, addPost}) => {
  
  return <div>
    <ProfileInfo />
    <MyPosts postData = {postData} addPost = {addPost}/>
  </div>
}

export default Profile
