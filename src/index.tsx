import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "redux/state";



const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {store.getState()}
                 updateNewPostText ={store.updateNewPostText.bind(store)}
                 addPost ={store.addPost.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(() => renderEntireTree(store.getState()) )




