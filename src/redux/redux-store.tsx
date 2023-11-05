import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import {usersReducer} from "redux/users-reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export const store = createStore(reducers);


export type RootStateType = ReturnType<typeof reducers>
export type StoreDispatch = typeof store.dispatch

// @ts-ignore
window.store = store