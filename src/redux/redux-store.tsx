import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import {usersReducer} from "redux/users-reducer";
import {authReducer} from "redux/auth-reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer
});

export const store = createStore(reducers);


export type RootStateType = ReturnType<typeof reducers>
export type StoreDispatch = typeof store.dispatch

// @ts-ignore
window.store = store