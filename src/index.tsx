import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StateType, subscribe, updateNewPostText} from "redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "redux/state";



const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state = {state}
                 updateNewPostText ={updateNewPostText}
                 addPost ={addPost}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(state)

subscribe(() => renderEntireTree(state) )




