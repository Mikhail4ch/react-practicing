import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'LiL Pimp' },
  { id: 2, name: 'No_Axich' },
  { id: 3, name: 'Lehandra' },
  { id: 4, name: 'Papanya' },
  { id: 5, name: 'Tankist' },
  { id: 6, name: 'Metallist' }
]

let messagesData = [
  { id: 1, message: 'How is it going with money?' },
  { id: 2, message: 'What money do you mean?' },
  { id: 3, message: 'This money I mean !' },
  { id: 4, message: 'Arshavin!!' },
  { id: 5, message: 'Kerzakov!' }
]

let postData = [
  { id: 1, message: 'Hi, degens !', like: 10 },
  { id: 2, message: 'When is airdrop coming, dude?', like: 15 },
  { id: 3, message: 'Actually, on the 13th on April.', like: 100 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData = {dialogsData} messagesData = {messagesData} postData = {postData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
