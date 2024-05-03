import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './redux/state';
/*import state, {subscribe}from './redux/state';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewPostText } from './redux/state';
import { updateNewMessageText } from './redux/state';*/


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App appState={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe (rerenderEntireTree);




