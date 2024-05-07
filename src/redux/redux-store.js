import { configureStore, combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    sidebar: sidebarReducer
});

let store = configureStore({reducer: reducers})


export default store;