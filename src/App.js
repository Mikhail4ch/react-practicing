import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route, Routes } from "react-router-dom";

const App = ({appState, addPost, addMessage, updateNewPostText, updateNewMessageText}) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friendsData = {appState.sidebar.friends}/>
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsData = {appState.dialog.dialogs} messagesData = {appState.dialog.messages} addMessage = {addMessage} newMessageText = {appState.dialog.newMessageText} updateNewMessageText = {updateNewMessageText}/>} />
            <Route path='/profile' element={<Profile postData = {appState.profile.posts} addPost = {addPost} newPostText = {appState.profile.newPostText} updateNewPostText = {updateNewPostText}/>} />
            <Route path='/Music' element={<Music />} />
            <Route path='/News' element={<News />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Friends' element={<Friends />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
