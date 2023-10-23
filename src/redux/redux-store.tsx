import { createStore, combineReducers } from 'redux';
import {  profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export const store = createStore(reducers);


/*
// до исправления
export type StoreType = typeof store;
*/

export type RootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store