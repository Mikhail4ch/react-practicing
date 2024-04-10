import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({postData}) => {
  
  return <div>
    <ProfileInfo />
    <MyPosts postData = {postData}/>
  </div>
}

export default Profile
