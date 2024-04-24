import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ({appState}) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs dialogsData = {appState.dialog.dialogs} messagesData = {appState.dialog.messages}/>} />
            <Route path='/profile' element={<Profile postData = {appState.profile.posts}/>} />
            <Route path='/Music' element={<Music />} />
            <Route path='/News' element={<News />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
