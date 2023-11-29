import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer, ProfileReducerActionTypes} from './profile-reducer';
import {dialogsReducer, DialogsReducerActionTypes} from './dialogs-reducer';
import {UserReducerActionTypes, usersReducer} from "redux/users-reducer";
import {authReducer, AuthReducerActionTypes} from "redux/auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>;


// типизируем наш Dispatch
export const useAppDispatch: ()=> AppDispatchType = useDispatch
// типизируем наш useSelector
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


// ВСЕ ТИПЫ ЭКШЕНОВ ДЛЯ ВСЕГО APP
export type AppActionsType = ProfileReducerActionTypes | DialogsReducerActionTypes | UserReducerActionTypes | AuthReducerActionTypes
// типизируем Dispatch для thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>



export type RootStateType = ReturnType<typeof rootReducer>
export type StoreDispatch = typeof store.dispatch

// @ts-ignore
// window.store = store





