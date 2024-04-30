import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {subscribe}from './redux/state';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App appState={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe (rerenderEntireTree);




