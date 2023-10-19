import { createStore, combineReducers } from 'redux';
import { StateProfile, profileReducer } from './profile-reducer';
import { StateDialogs, dialogsReducer } from './dialogs-reducer';


export type StateType = {
    profilePage: StateProfile;
    dialogsPage: StateDialogs;
};

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export const store = createStore(reducers);

export type StoreType = ReturnType<typeof createStore>;
// @ts-ignore
window.store = store