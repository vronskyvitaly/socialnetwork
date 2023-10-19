import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/redux-store";
import { StateType } from "./redux/store";



const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()}
                 dispatch ={store.dispatch.bind(store)}
                 store = {store}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})




